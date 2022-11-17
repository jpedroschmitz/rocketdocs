---
title: Remark plugins
description: Learn how to use Remark plugins in Rocket Docs.
---

To use a Remark plugin, you need to set the plugin name on this theme's `gatsbyRemarkPlugins` option.

## Example usage

Given that we want to use [Graphviz](https://graphviz.org/) in our Markdown files, we need to install the Remark plugin and add it on to `gatsbyRemarkPlugins` option on `gatsby.config.js`.

```sh
# Using Yarn:
yarn add gatsby-remark-graphviz
# Using NPM:
npm i gatsby-remark-graphviz
```

```js title=gatsby-config.js
module.exports = {
  siteMetadata: {
    // ...
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        // ...
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

## Using a custom Remark Transformer plugin

If you use a local plugin, you must point to its location in the project through `require.resolve`.

```js title=gatsby-config.js
module.exports = {
  siteMetadata: {
    // ...
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        // ...
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

For more information on how to create a Remark Transformer plugin, please refer to the [Creating a Remark Transformer Plugin](https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/) document.
