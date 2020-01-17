const withDefaults = require(`./util/options`);

module.exports = themeOptions => {
  const options = withDefaults(themeOptions);
  const { basePath, docsPath, configPath } = options;
  const { siteMetadata } = options;

  return {
    siteMetadata: {
      ...siteMetadata,
      basePath,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: siteMetadata.siteUrl,
        },
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          color: siteMetadata.themeColor,
          showSpinner: false,
        },
      },
      `gatsby-plugin-catch-links`,
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
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `MenuItems`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `config`,
          path: configPath,
        },
      },
      siteMetadata.analyticsID && {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: siteMetadata.analyticsID,
        },
      },
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                removeAccents: true,
              },
            },
            `gatsby-remark-embedder`,
            `gatsby-remark-lazy-load`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                withWebp: true,
                linkImagesToOriginal: false,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 16px`,
              },
            },
            `gatsby-remark-copy-linked-files`,
            {
              resolve: `gatsby-remark-external-links`,
              options: {
                target: `_blank`,
                rel: `noopener noreferrer`,
              },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                aliases: {
                  sh: `bash`,
                  env: `bash`,
                  gitignore: `none`,
                  gql: `graphql`,
                  mdx: `markdown`,
                  es6: `js`,
                },
              },
            },
            {
              resolve: `gatsby-remark-code-titles`,
              options: {
                className: `gatsby-code-title`,
              },
            },
          ],
          plugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-images`,
            `gatsby-remark-lazy-load`,
            `gatsby-remark-embedder`,
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-offline`,
    ].filter(Boolean),
  };
};
