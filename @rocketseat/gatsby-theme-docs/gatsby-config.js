const withDefault = require('@rocketseat/gatsby-theme-docs-core/util/with-default');

module.exports = options => {
  const themeOtions = withDefault(options);

  return {
    siteMetadata: {
      defaultTitle: `Gatsby Themes from Rocketseat`,
      siteTitle: `Rocketseat Gatsby Themes`,
      siteTitleShort: `Rocketseat Gatsby Themes`,
      siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
      siteUrl: `https://rocketdocs.netlify.com`,
      siteAuthor: `@rocketseat`,
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
