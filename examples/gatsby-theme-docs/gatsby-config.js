module.exports = {
  siteMetadata: {
    siteTitle: `@rocketseat/gatsby-theme-docs`,
    defaultTitle: `@rocketseat/gatsby-theme-docs`,
    siteTitleShort: `gatsby-theme-docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketseat.github.io/gatsby-themes`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        docsPath: `src/docs`,
        basePath: `gatsby-themes`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketseat.github.io/gatsby-themes`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
