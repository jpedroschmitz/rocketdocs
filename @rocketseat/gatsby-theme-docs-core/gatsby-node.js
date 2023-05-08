const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require(`fs`);
const urljoin = require(`url-join`);
const { compileMDXWithCustomOptions } = require(`gatsby-plugin-mdx`);

const { normalizeBasePath, resolveLink } = require(`./util/url`);
const withDefault = require(`./util/with-default`);
const { remarkHeadingsPlugin } = require(`./remark-headings-plugin`);

function generateRepositoryEditLink(themeOptions, relativePath) {
  const { baseDir, docsPath, repositoryUrl, githubUrl, branch } =
    withDefault(themeOptions);

  const repoUrl = !repositoryUrl && githubUrl ? githubUrl : repositoryUrl;
  const pathToFile = path.join(branch, baseDir, docsPath);

  if (repoUrl.includes('github')) {
    return {
      editUrl: urljoin(repoUrl, `tree`, pathToFile, relativePath),
      provider: `GitHub`,
    };
  }

  if (repoUrl.includes('gitlab')) {
    return {
      editUrl: urljoin(repoUrl, '-', 'blob', pathToFile, relativePath),
      provider: `GitLab`,
    };
  }

  if (repoUrl.includes('bitbucket')) {
    return {
      editUrl: urljoin(repoUrl, 'src', pathToFile, relativePath),
      provider: `BitBucket`,
    };
  }

  return {
    editUrl: null,
    provider: null,
  };
}

exports.createPages = (
  { graphql, actions: { createPage }, reporter },
  themeOptions,
) => {
  reporter.success(`onCreateDocs`);

  const { basePath, githubUrl, repositoryUrl } = withDefault(themeOptions);

  const docsTemplate = require.resolve(`./src/templates/docs-query.js`);
  const homeTemplate = require.resolve(`./src/templates/homepage-query.js`);

  return graphql(
    `
      {
        files: allFile(
          filter: {
            extension: { in: ["md", "mdx"] }
            sourceInstanceName: { eq: "docs" }
          }
        ) {
          edges {
            node {
              id
              relativePath
              childMdx {
                fields {
                  slug
                }
                internal {
                  contentFilePath
                }
              }
            }
          }
        }
        sidebar: allSidebarItems {
          edges {
            node {
              label
              link
              items {
                label
                link
              }
              id
            }
          }
        }
        homepage: allMdx(filter: { fields: { slug: { eq: "/" } } }) {
          nodes {
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      reporter.panic(
        `docs: there was an error loading the docs folder!`,
        result.errors,
      );
      return;
    }

    if (!repositoryUrl && githubUrl) {
      reporter.warn(
        `@rocketseat/gatsby-theme-docs: The option \`githubUrl\` was deprecated in favor of \`repositoryUrl\`. \nTo remove this warning, replace \`githubUrl\` with \`repositoryUrl\`.`,
      );
    }

    const homepage = result.data.homepage.nodes[0];

    createPage({
      path: basePath,
      component: `${homeTemplate}?__contentFilePath=${homepage.internal.contentFilePath}`,
      context: {},
    });

    // Generate prev/next items based on sidebar.yml file
    const sidebar = result.data.sidebar.edges;
    const listOfItems = [];

    sidebar.forEach(({ node: { label, link, items } }) => {
      if (Array.isArray(items)) {
        items.forEach((item) => {
          listOfItems.push({
            label: item.label,
            link: resolveLink(item.link, basePath),
          });
        });
      } else {
        listOfItems.push({
          label,
          link: resolveLink(link, basePath),
        });
      }
    });

    // Generate docs pages
    const docs = result.data.files.edges;
    docs.forEach((doc) => {
      const {
        childMdx: {
          fields: { slug },
          internal: { contentFilePath },
        },
        relativePath,
      } = doc.node;

      // Get the file edit link based on the repository url
      const repositoryEditUrl = generateRepositoryEditLink(
        themeOptions,
        relativePath,
      );

      const pageLink = slug.slice(0, slug.length - 1);
      const currentPageIndex = listOfItems.findIndex(
        (page) => page.link === pageLink,
      );

      const prev = listOfItems[currentPageIndex - 1];
      const next = listOfItems[currentPageIndex + 1];

      createPage({
        path: slug,
        component: `${docsTemplate}?__contentFilePath=${contentFilePath}`,
        context: {
          slug,
          prev,
          next,
          repositoryEditUrl: repositoryEditUrl.editUrl || '',
          repositoryProvider: repositoryEditUrl.provider || '',
        },
      });
    });

    reporter.success(`docs pages created`);
  });
};

exports.createSchemaCustomization = async ({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store,
}) => {
  const { createTypes } = actions;

  createTypes(`
    type MdxFrontmatter {
      title: String!
      description: String
      image: String
      disableTableOfContents: Boolean
    }
  `);

  createTypes(`
    type SidebarItems implements Node {
      label: String!
      link: String
      items: [SidebarItemsItems]
    }

    type SidebarItemsItems {
      label: String
      link: String
    }
  `);

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent);

          if (!fileNode) {
            return null;
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            },
          );

          if (!result) {
            return null;
          }

          return result.metadata.headings;
        },
      },
    },
  });

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ]);
};

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { configPath, docsPath, yamlFilesPath } = withDefault(themeOptions);
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, configPath),
    path.join(program.directory, docsPath),
    path.join(program.directory, yamlFilesPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.success(`docs: initialized the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

exports.onCreateNode = (
  { node, actions: { createNodeField }, getNode },
  themeOptions,
) => {
  if (node.internal.type !== `Mdx`) {
    return;
  }

  const { basePath } = withDefault(themeOptions);

  let value = createFilePath({ node, getNode });
  if (value === 'index') value = '';

  createNodeField({
    name: `slug`,
    node,
    value: normalizeBasePath(basePath, value),
  });

  createNodeField({
    name: `id`,
    node,
    value: node.id,
  });
};
