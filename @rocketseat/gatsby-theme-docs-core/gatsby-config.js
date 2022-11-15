const withDefault = require(`./util/with-default`);
const path = require(`path`);
const camelCase = require('lodash.camelcase');

const upperFirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

module.exports = (options) => {
  const {
    basePath,
    configPath,
    docsPath,
    yamlFilesPath,
    withMdx,
    gatsbyRemarkPlugins,
  } = withDefault(options);

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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `yamlFiles`,
          path: yamlFilesPath,
        },
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: ({ node, isArray }) => {
            if (node.sourceInstanceName === `config`) {
              return `SidebarItems`;
            }

            // Fallback to the existing algorithm from gatsby-transformer-yaml plugin.
            // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-yaml/src/gatsby-node.js#L22-L28
            if (node.internal.type !== `File`) {
              return upperFirst(camelCase(`${node.internal.type} Yaml`));
            }

            // Parsing algorithm: Array of Objects, where each file represents a collection.
            if (isArray) {
              return upperFirst(camelCase(`${node.name} Yaml`));
            }

            // Parsing algorithm: Single Object, where each subfolder represents a collection; each file represents one "record".
            return upperFirst(camelCase(`${path.basename(node.dir)} Yaml`));
          },
        },
      },
      withMdx && {
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
            ...gatsbyRemarkPlugins,
          ],
          plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
        },
      },
    ].filter(Boolean),
  };
};
