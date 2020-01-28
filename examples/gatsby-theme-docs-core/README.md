<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/theme-docs.svg" alt="A illustration of file that is the @rocketseat/gatsby-theme-docs logo" width="100">
</p>

<h2 align="center">
  Gatsby Starter: Core Theme for docs
</h2>

<p align="center">
  Gatsby starter for creating a documentation website with no additional theming or style opinions. Includes all the data structures you need to get up. Using the Gatsby Theme: <a href="https://github.com/Rocketseat/gatsby-themes/tree/master/%40rocketseat/gatsby-theme-docs-core">@rocketseat/gatsby-theme-docs-core</a>
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
  <a href="#-usage">Usage</a> •
  <a href="#-license">License</a>
</p>

## 🚀 Features

- MDX for docs;
- Sidebar customization with Yaml;

## 🔥 Usage

### Navigation

The sidebar is highly customizable, you can create a file under the config folder named `sidebar.yml`. If you add a `basePath` in the theme (@rocketseat/gatsby-theme-docs-core) options, you don't need to add it before the links, the `useSidebar` hook will append it.

Here is an example:

```yml
# Simple item
- label: 'Home'
  link: '/'
# With list of subitens
- label: 'With subitens'
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

## 📝 License

Licensed under the [MIT License](./LICENSE).

---

Made with 💜 by Rocketseat :wave: [check our community!](https://discordapp.com/invite/gCRAFhc)
