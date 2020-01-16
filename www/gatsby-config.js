module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        metadata: {
          siteTitle: `Rocketseat Gatsby Themes`,
          siteTitleAlt: `Rocketseat Gatsby Themes`,
          siteTitleShort: `Rocketseat Gatsby Themes`,
          siteDescription: `Gatsby themes and tools created with love by Rocketseat.`,
          siteUrl: `https://gatsby-theme-rocketseat.github.io`,
          siteAuthor: `@rocketseat`,
          siteName: `Rocketseat Gatsby Themes`,
          siteImage: `/banner.png`,
          siteLanguage: `pt_br`,
          themeColor: `#7159c1`,
          footer: `Created with <3 by Rocketseat`,
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
