const withDefaults = require('../../../util/options');

module.exports = ({ graphql, actions, reporter }, themeOptions) => {
  reporter.info('creating docs pages');
  const { basePath } = withDefaults(themeOptions);
  const { createPage } = actions;

  const docsTemplate = require.resolve(`../../templates/docs.js`);
  const homeTemplate = require.resolve(`../../templates/home.js`);

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
        `There was an error loading the docs folder!`,
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
    reporter.success('docs pages created');
  });
};
