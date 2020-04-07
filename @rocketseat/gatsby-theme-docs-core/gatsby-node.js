const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require(`fs`);

const withDefault = require(`./util/with-default`);

function normalizeBasePath(basePath, link) {
  return `/${basePath}/${link}`.replace(/\/\/+/g, `/`);
}

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
      }
    `,
  ).then(result => {
    if (result.errors) {
      reporter.panic(
        `docs: There was an error loading the docs folder!`,
        result.errors,
      );
      return;
    }

    createPage({
      path: basePath,
      component: homeTemplate,
    });

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

      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          slug,
          githubEditUrl,
        },
      });
    });

    reporter.success(`success: Docs pages created`);
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
};

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { docsPath } = withDefault(themeOptions);
  const { program } = store.getState();

  const dirs = [path.join(program.directory, docsPath)];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.success(`Docs: intialized the ${dir} directory`);
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
