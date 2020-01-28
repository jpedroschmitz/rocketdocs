/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs-core`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
      },
    },
  ],
};
