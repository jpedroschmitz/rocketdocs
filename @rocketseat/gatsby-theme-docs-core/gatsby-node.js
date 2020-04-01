const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require(`fs`);

const { normalizeBasePath, resolveLink } = require(`./util/url`);
const withDefault = require(`./util/with-default`);

exports.createPages = (
  { graphql, actions: { createPage }, reporter },
  themeOptions,
) => {
  reporter.success(`onCreateDocs`);

  const { basePath, baseDir, docsPath, githubUrl } = withDefault(themeOptions);

  const docsTemplate = require.resolve(`./src/templates/docs-query.ts`);
  const homeTemplate = require.resolve(`./src/templates/homepage-query.ts`);

  return graphql(
    `
      {
        files: allFile(filter: { extension: { in: ["md", "mdx"] } }) {
          edges {
            node {
              id
              relativePath
              childMdx {
                fields {
                  slug
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
      }
    `,
  ).then(result => {
    if (result.errors) {
      reporter.panic(
        `docs: there was an error loading the docs folder!`,
        result.errors,
      );
      return;
    }

    createPage({
      path: basePath,
      component: homeTemplate,
    });

    // Generate prev/next items based on sidebar.yml file
    const sidebar = result.data.sidebar.edges;
    const listOfItems = [];

    sidebar.forEach(({ node: { label, link, items } }) => {
      if (Array.isArray(items)) {
        items.forEach(item => {
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
    docs.forEach(doc => {
      const {
        childMdx: {
          fields: { slug },
        },
        relativePath,
      } = doc.node;

      let githubEditUrl;

      if (githubUrl) {
        githubEditUrl = path.join(
          githubUrl,
          `tree`,
          path.join(`master`, baseDir, docsPath),
          relativePath,
        );
      }

      const pageLink = slug.slice(0, slug.length - 1);
      const currentPageIndex = listOfItems.findIndex(
        page => page.link === pageLink,
      );

      const prev = listOfItems[currentPageIndex - 1];
      const next = listOfItems[currentPageIndex + 1];

      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          slug,
          prev,
          next,
          githubEditUrl,
        },
      });
    });

    reporter.success(`docs pages created`);
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MdxFrontmatter @dontInfer {
      title: String!
      description: String
      image: String
      disableTableOfContents: Boolean
    }
  `);

  actions.createTypes(`
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
};

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { configPath, docsPath } = withDefault(themeOptions);
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, configPath),
    path.join(program.directory, docsPath),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.success(`docs: intialized the ${dir} directory`);
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
  if (value === `index`) value = ``;

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
