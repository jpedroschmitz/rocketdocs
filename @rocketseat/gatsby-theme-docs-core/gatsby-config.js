const withDefault = require(`./util/with-default`);

module.exports = options => {
  const { basePath, configPath, docsPath } = withDefault(options);
  return {
    siteMetadata: {
      basePath,
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `docs`,
          path: docsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `config`,
          path: configPath,
        },
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `SidebarItems`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-embedder`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                withWebp: true,
                linkImagesToOriginal: false,
              },
            },
            `gatsby-remark-responsive-iframe`,
            `gatsby-remark-copy-linked-files`,
          ],
          plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
        },
      },
    ].filter(Boolean),
  };
};
