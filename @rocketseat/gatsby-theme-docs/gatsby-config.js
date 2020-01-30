module.exports = options => {
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
      footer: `Theme by Rocketseat`,
    },
    plugins: [
      {
        resolve: `@rocketseat/gatsby-theme-docs-core`,
        options,
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
    ].filter(Boolean),
  };
};
