const { createFilePath } = require(`gatsby-source-filesystem`);

const { normalizeBasePath } = require(`../../util/url`);
const withDefaults = require(`../../../util/options`);

module.exports = ({ node, actions, getNode }, themeOptions) => {
  const { createNodeField } = actions;

  const { basePath } = withDefaults(themeOptions);

  if (node.internal.type === `Mdx`) {
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
  }
};
