<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/theme-docs.svg" alt="A illustration of file that is the @rocketseat/gatsby-theme-docs logo" width="100">
</p>

<h2 align="center">
  @rocketseat/gatsby-theme-docs-core
</h2>

<p align="center">
  Core theme for <a href="https://github.com/Rocketseat/gatsby-themes/tree/master/%40rocketseat/gatsby-theme-docs">@rocketseat/gatsby-theme-docs</a> with no additional theming or style opinions. Includes all of the data structures you need to get up and build a documentation website.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-%237159c1.svg" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%237159c1">

  <a href="https://twitter.com/intent/follow?screen_name=rocketseat">
    <img src="https://img.shields.io/twitter/follow/rocketseat.svg?label=Follow%20@rocketseat" alt="Follow @rocketseat" />
  </a>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#%EF%B8%8F-getting-started">Getting started</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

## 🚀 Features

- MDX for docs;
- Sidebar customization with Yaml;

## ⚡️ Getting started

Using Yarn:

```sh
yarn add @rocketseat/gatsby-theme-docs-core
```

Using NPM:

```sh
npm i @rocketseat/gatsby-theme-docs-core
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
  </table>
</div>

### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs-core`,
      options: {
        basePath: `documentation`,
        configPath: `config`,
        docsPath: `docs`,
      },
    },
  ],
};
```

### Navigation

The sidebar is highly customizable, you can create a file under the config folder named `sidebar.yml`. If you add a `basePath` in the theme options, you don't need to add it before the links, the `useSidebar` hook will append it.

Here is an example:

```yml
# Simple item
- label: 'Home'
  link: '/'
# With list of subitems
- label: 'With dropdown'
  items:
    - label: 'My Example'
      link: '/my-example'
```

### `useSidebar`

To get all the sidebar items, you can use the `useSidebar` hook. Example:

```js
import React from 'react';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

export default function Sidebar() {
  const data = useSidebar();

  console.log(data);
  /*
    [
      {
        "node": {
          "label": "Home",
          "link": "/",
          "items": null,
          "id": "a2913be3-af3c-5fc9-967e-a058e86b20a9"
        }
      },
      {
        "node": {
          "label": "With dropdown",
          "link": null,
          "items": [{ "label": "My Example", "link": "/my-example" }],
          "id": "c7d9606c-4bda-5097-a0df-53108e9f4efd"
        }
      }
    ]
  */
}
```

### Docs Fields

Inside your docs folder, you can create MDX files. The filename will be the page path.

Add a title to the frontmatter of the MDX file and place the content below it. For example:

```mdx
---
title: 'My Example'
description: 'A simple description for this page'
image: 'banner.png'
---

Your amazing page
```

Every file must have a custom title. Description and image are not required.

### Shadowing

Check the [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) docs to understand how to customize this theme!

In general, you will need to create two files (`Docs.js` and `Homepage.js`) into `src/@rocketseat/gatsby-theme-docs-core/components/templates` to shadow/override it.

## ✨ Contributing

Thanks for being interested in contributing! We’re so glad you want to help! Please take a little bit of your time and look at our [contributing guidelines](https://github.com/Rocketseat/gatsby-themes/blob/master/.github/CONTRIBUTING.md) and our
[code of conduct](https://github.com/Rocketseat/gatsby-themes/blob/master/.github/CODE_OF_CONDUCT.md)! All type of contributions are welcome, such as bug fixes, issues or feature requests.

## 📝 License

Licensed under the [MIT License](./LICENSE).

---

Made with 💜 by Rocketseat :wave: [check our community!](https://discordapp.com/invite/gCRAFhc)
