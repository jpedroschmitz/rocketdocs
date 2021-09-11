<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/theme-docs.svg" alt="A illustration of file that is the @rocketseat/gatsby-theme-docs logo" width="100">
</p>

<h2 align="center">
  @rocketseat/gatsby-theme-docs-core
</h2>

<p align="center">
  Core theme for <a href="https://github.com/jpedroschmitz/rocketdocs/tree/main/%40rocketseat/gatsby-theme-docs">@rocketseat/gatsby-theme-docs</a> with no additional theming or style opinions. Includes all of the data structures you need to get up and build a documentation website.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-%238257E6.svg" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%238257E6">

  <a href="https://twitter.com/intent/follow?screen_name=jpedroschmitz">
    <img src="https://img.shields.io/twitter/follow/jpedroschmitz.svg?label=Follow%20@jpedroschmitz" alt="Follow @jpedroschmitz" />
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

| Key           | Default | Required | Description                                                                                                                                                            |
| ------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| basePath      | /       | No       | Root url for all docs                                                                                                                                                  |
| configPath    | config  | No       | Location of config files                                                                                                                                               |
| docsPath      | docs    | No       | The site description for SEO and social (FB, Twitter) tags                                                                                                             |
| githubUrl     | -       | -        | Deprecated in favor of `repositoryUrl`                                                                                                                                 |
| repositoryUrl | -       | No       | The URL of your repository (supports GitHub, GitLab and Bitbucket). Example: `https://github/jpedroschmitz/rocketdocs`                                                 |
| baseDir       | -       | No       | If your Gatsby site does not live in the root of your project directory/git repo, pass the subdirectory name here (`docs`, for example)                                |
| withMdx       | true    | No       | If necessary, you can add your own MDX options to the theme. To do so, make sure you turn this option to false and include `gatsby-plugin-mdx` on your `gatsby-config` |
| branch        | main    | No       | Default branch of the repository                                                                                                                                       |

> Note: When adding a BitBucket link on the `repositoryUrl` option, don't add the `src/<branch>` to it.
> Example of correct link: `https://bitbucket.org/jpedroschmitz/rocketdocs`

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
        githubUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `www`,
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
disableTableOfContents: false
---

Your amazing page
```

Every file must have a custom title. Description and image are not required.

### Shadowing

Check the [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/themes/shadowing/) docs to understand how to customize this theme!

In general, you will need to create two files (`Docs.js` and `Homepage.js`) into `src/@rocketseat/gatsby-theme-docs-core/components/templates` to shadow/override it.

## ✨ Contributing

Thanks for being interested in contributing! We’re so glad you want to help! Please take a little bit of your time and look at our [contributing guidelines](https://github.com/jpedroschmitz/rocketdocs/blob/main/.github/CONTRIBUTING.md) and our
[code of conduct](https://github.com/jpedroschmitz/rocketdocs/blob/main/.github/CODE_OF_CONDUCT.md)! All type of contributions are welcome, such as bug fixes, issues or feature requests.

## 📝 License

Licensed under the [MIT License](https://github.com/jpedroschmitz/rocketdocs/blob/main/%40rocketseat/gatsby-theme-docs-core/LICENSE).

---

Made with 💜 by João Pedro
