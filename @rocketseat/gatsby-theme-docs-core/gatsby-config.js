const withDefault = require(`./util/with-default`);
const path = require(`path`);
const _ = require(`lodash`);

module.exports = (options) => {
  const { basePath, configPath, docsPath, yamlFilesPath, withMdx } =
    withDefault(options);

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
          /* eslint-disable no-unused-vars */
          typeName: ({ node, object, isArray }) => {
            /* eslint-enable no-unused-vars */

            if (node.sourceInstanceName === `config`) {
              return `SidebarItems`;
            }

            // Fallback to the existing algorithm from gatsby-transformer-yaml plugin.
            // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-yaml/src/gatsby-node.js#L22-L28
            if (node.internal.type !== `File`) {
              return _.upperFirst(_.camelCase(`${node.internal.type} Yaml`));
            }

            // Parsing algorithm: Array of Objects, where each file represents a collection.
            if (isArray) {
              return _.upperFirst(_.camelCase(`${node.name} Yaml`));
            }

            // Parsing algorithm: Single Object, where each subfolder represents a collection; each file represents one "record".
            return _.upperFirst(_.camelCase(`${path.basename(node.dir)} Yaml`));
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
          ],
          plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
        },
      },
    ].filter(Boolean),
  };
};
