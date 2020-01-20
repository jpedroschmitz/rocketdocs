module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        docsPath: `src/docs`,
        metadata: {
          siteTitle: `Rocketseat`,
          defaultTitle: `Gatsby Themes from Rocketseat`,
          siteTitleShort: `Rocketseat Gatsby Themes`,
          siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
          siteUrl: `https://gatsby-theme-rocketseat.github.io`,
          siteAuthor: `@rocketseat`,
          siteName: `Rocketseat Gatsby Themes`,
          siteImage: `/banner.png`,
          siteLanguage: `en_us`,
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
