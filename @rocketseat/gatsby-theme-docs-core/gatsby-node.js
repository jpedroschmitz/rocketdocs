const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require(`fs`);

const { normalizeBasePath } = require(`./util/url`);
const withDefault = require(`./util/with-default`);

exports.createPages = (
  { graphql, actions: { createPage }, reporter },
  themeOptions,
) => {
  reporter.info(`starting docs page creation`);

  const { basePath } = withDefault(themeOptions);

  const docsTemplate = require.resolve(`./src/templates/docs-query.js`);
  const homeTemplate = require.resolve(`./src/templates/homepage-query.js`);

  return graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
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

    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const prev = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const { slug } = post.node.fields;

      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          slug,
          prev,
          next,
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
