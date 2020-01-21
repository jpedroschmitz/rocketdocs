module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        docsPath: `src/docs`,
        basePath: `gatsby-theme-rocketseat`,
        metadata: {
          siteTitle: `Rocketseat`,
          defaultTitle: `Gatsby Themes from Rocketseat`,
          siteTitleShort: `Rocketseat Gatsby Themes`,
          siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
          siteUrl: `https://rocketseat.github.io/gatsby-theme-rocketseat`,
          siteAuthor: `@rocketseat`,
          siteImage: `/banner.png`,
          siteLanguage: `en`,
          themeColor: `#7159c1`,
          footer: `Created with <3`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
  ],
};
