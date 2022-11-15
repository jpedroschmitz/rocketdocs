---
title: Using Remark Transformer plugin
description: Learn how to Using Remark Transformer plugin in Rocket Docs.
---

To use Remark Transformer plugin, set a plugin name to `gatsbyRemarkPlugins` option of `@rocketseat/gatsby-theme-docs` plugin which is configured in `gatsby.config.js`.

## Example usage

Given that we want to use Graphviz in our Markdown file, we can configure our gatsby.config.js as the following code.

```js title=gatsby-config.js
module.exports = {
  siteMetadata: {
    siteTitle: `Rocket Docs`,
    defaultTitle: `Rocket Docs`,
    siteTitleShort: `Rocket Docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.app`,
    siteAuthor: `@jpedroschmitz`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [
          {
            `gatsby-remark-graphviz`,
          }
        ]
      },
    }
  ]
}
```

_Please note that some configuration in the gatsby-config.js has been removed for simplicity._

## Using a custom Remark Transformer plugin

If you want to use your custom Remark Transformer plugin and your plugin has been published to NPM registry, you can set your package name to `gatsbyRemarkPlugins` as the previous example.

However, if you use a local plugin like `gatsby-remark-purple-headers` which is in `gatsby-starter-rocketdocs (examples/gatsby-theme-docs)` project, you need to point to its location in the project through require.resolve.

```js title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        gatsbyRemarkPlugins: [
          {
            `gatsby-remark-graphviz`,
            resolve: require.resolve(`./plugins/gatsby-remark-purple-headers`)
          }
        ]
      },
    }
  ]
}
```

_Please note that some configuration in the gatsby-config.js has been removed for simplicity._

## Example result of pgatsby-remark-purple-headers plugin

Given Markdown content as the following code:

```md
# Hello world
```

The gatsby-remark-purple-headers will transform all top-level headings in the markdown content to color purple.

# Hello World

More information of how to creating a Remark Transformer plugin, please refer to [Creating a Remark Transformer Plugin](https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/) document.
