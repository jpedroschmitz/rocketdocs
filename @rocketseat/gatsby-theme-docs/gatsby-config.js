const withDefault = require('@rocketseat/gatsby-theme-docs-core/util/with-default');

module.exports = (options) => {
  const themeOtions = withDefault(options);

  return {
    siteMetadata: {
      defaultTitle: `Rocket Docs by João Pedro Schmitz`,
      siteTitle: `Rocket Docs`,
      siteTitleShort: `Rocket Docs`,
      siteDescription: `Easy to use Gatsby Theme to create documentation websites`,
      siteUrl: `https://rocketdocs.netlify.app`,
      siteAuthor: `@jpedroschmitz`,
      siteImage: `/banner.png`,
      siteLanguage: `en`,
      basePath: themeOtions.basePath,
      docsPath: themeOtions.docsPath,
    },
    plugins: [
      {
        resolve: `@rocketseat/gatsby-theme-docs-core`,
        options: themeOtions,
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
    ].filter(Boolean),
  };
};
