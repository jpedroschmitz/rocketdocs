<p align="center">
  <img src="../../.github/assets/theme-docs.svg" alt="Rocketseat and Gatsby" width="100">
</p>

<h2 align="center">
  @rocketseat/gatsby-theme-docs
</h2>

<p align="center">
  Out of the box Gatsby Theme for creating documentation websites easily and quickly.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-%237159c1.svg" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%237159c1">

  <a href="https://twitter.com/intent/follow?screen_name=rocketseat">
    <img src="https://img.shields.io/twitter/follow/rocketseat.svg?label=Follow%20@rocketseat" alt="Follow @rocketseat" />
  </a>
</p>

<p align="center">
  <a href="#rocket-docs">Features</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#memo-license">License</a>
</p>

## :rocket: Features

- MDX for docs;
- Code and syntax highlighting with PrismJS;
- PWA;
- Sidebar customization with Yaml;
- SEO (schema.org data, Open Graph and Twitter tags).
- Google Analytics support;

## ⚡️ Installation

Using Yarn:

```sh
yarn add @rocketseat/gatsby-theme-docs
```

Using NPM:

```sh
npm i @rocketseat/gatsby-theme-docs
```

## 🔥 Usage

### Theme options

<div style="overflow-x:auto;">
  <table>
    <tr>
      <th>Key</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>basePath</td>
      <td>/</td>
      <td>Root url for all docs</td>
    </tr>
    <tr>
      <td>configPath</td>
      <td>config</td>
      <td>Location of config files</td>
    </tr>
    <tr>
      <td>docsPath</td>
      <td>docs</td>
      <td>Location of the docs files</td>
    </tr>
    <tr>
      <td>metadata</td>
      <td>-</td>
      <td>Handful items you can customize</td>
    </tr>
  </table>
</div>

### Example usage

In addition to the theme options, there are a handful items you can customize via the `metadata` object. Check below example usage:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        basePath: `documentation`,
        configPath: `config`,
        docsPath: `docs`,
        metadata: {
          // Used for the title template on pages other than the index site
          siteTitle: `Rocketseat Gatsby Themes`,
          // Default title of the page
          defaultTitle: `Gatsby Themes from Rocketseat`,
          // Used in header, just appear on mobile
          siteTitleShort: `Rocketseat Gatsby Themes`,
          // Default description, used for SEO
          siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
          // Will be used to generate absolute URLs for og:image etc...
          siteUrl: `https://gatsby-theme-rocketseat.github.io`,
          // Twitter handle
          siteAuthor: `@rocketseat`,
          // Used for og:image and must be placed inside the `static` folder
          siteImage: `/banner.png`,
          // Will be set on the <html /> tag
          siteLanguage: `en`,
          // Used for (not required)
          themeColor: `#7159c1`,
          // Placed on sidebar bottom (not required)
          footer: `Created with <3`,
        },
      },
    },
  ],
};
```

### Navigation

The sidebar is highly customizable, you can create a file under the config folder named `menu.yml`. Here is an example:

```yml
- label: 'Home' # just a simple item
  link: '/'
- label: 'With dropdown' # to create a 'dropdown'
  items:
    - label: 'My Example'
      link: '/my-example'
```

### Docs Fields

First, create a new entry in your navigation file. If this file doesn't exist yet, see the step above.

Now, create a new file at `docs/my-example.mdx` (if you changed the `docsPath`, create it inside your folder).

The filename has to be the same as the link you used in the navigation.

Add a title to the frontmatter of the MDX file and place the content below it. For example:

```mdx
---
title: 'My Example'
description: 'A simple description for this page'
---

Place your content here!
```

Plus the `title` and `description`, we have the `image` attribute, which will be used for the `og:image` tag.

### Shadowing

Check the [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) docs to understand how to customize this theme!

In general, you will need to place your files into `src/@rocketseat/gatsby-theme-docs/` to shadow/override.

### Changing the home text

Create a file at `src/@rocketseat/gatsby-theme-docs/text/index.mdx` to edit the text.

## ✨ Contributing

Thanks for being interested in contributing! We’re so glad you want to help! Please take a little bit of your time and look at our [contributing guidelines](https://github.com/Rocketseat/gatsby-theme-rocketseat/blob/master/.github/CONTRIBUTING.md) and our
[code of conduct](https://github.com/Rocketseat/gatsby-theme-rocketseat/blob/master/.github/CODE_OF_CONDUCT.md)! All type of contributions are welcome, such as bug fixes, issues or feature requests. Also, don't forget to check the [roadmap](#roadmap).

## 🚗 Roadmap

If you'd like to see our next steps or in which feature our bug fix we are working on, please check our [roadmap project](https://github.com/Rocketseat/gatsby-theme-rocketseat/projects/2).

## :memo: License

Licensed under the [MIT License](./LICENSE).

---

Made with 💜 by Rocketseat :wave: [check our community!](https://discordapp.com/invite/gCRAFhc)
