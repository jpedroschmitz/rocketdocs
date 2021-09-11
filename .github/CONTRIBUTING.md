# Contribution guidelines

## Table of Contents

- [Getting started](#getting-started)
  - [Language](#language)
    - [For native English speakers](#for-native-english-speakers)
  - [Code of Conduct](#code-of-conduct)
- [How can I help?](#how-can-i-help)
  - [Documentation](#documentation)
  - [Issues](#issues)
    - [Submitting an issue](#submitting-an-issue)
  - [Feedback](#feedback)
  - [Code](#code)
    - [Prerequisites](#prerequisites)
    - [Local Development](#local-development)
- [Commiting](#commiting)
  - [Why all these rules?](#why-all-these-rules)
- [Pull Requests](#pull-requests)
  - [Changesets](#changesets)

## Getting started

First off, we would like to thank you for taking the time to contribute and make this a better project!

Here we have a set of instructions and guidelines to reduce misunderstandings and make the process of contributing to Rocket Docs as smooth as possible.

We hope this guide makes the contribution process clear and answers any questions you may have.

### Language

Please, while contributing or interacting in any way in this project, refrain from using any language other than **English**.

#### For native English speakers

Try to use simple words and sentences. Don't make fun of non-native English speakers if you find something wrong about the way they express themselves.

Try to encourage newcomers to express their opinions, and make them comfortable enough to do so.

### Code of Conduct

We expect that project participants to adhere to our Code of Conduct. You can check the [full text](CODE_OF_CONDUCT.md) so that you may understand the kind of conduct we are expecting and what actions will and will not be tolerated.

By participating in this project, you agree to abide by its terms.

## How can I help?

Here are some ways you can help along with some guidelines.

### Documentation

As a user of our themes, you're the perfect candidate to help us improve our documentation!

Typos, errors, lack of examples and/or explanation and so on, are just some examples of things that could be fixed and/or improved.

You could even make improvements to this guide! :)

While documenting, try to keep things simple and clear.

### Issues

Some issues are created with missing information, without a template, not reproducible, or plain
invalid.

You can make them easier to understand and resolve.

#### Submitting an issue

- Please search for similar issues before opening a new one;
- Use one of the corresponding issue templates;
- Use a clear and descriptive title;
- Include as much information as possible by filling out the provided issue template;

### Feedback

The more feedback the better! We're always looking for more suggestions and opinions on discussions. That's a good opportunity to influence the future direction of this project.

This includes submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

### Code

You can use issue labels to discover issues you could help out with:

- [`bug` issues](https://github.com/jpedroschmitz/rocketdocs/labels/kind%3A%20bug)
  are known bugs we'd like to fix;
- [`enhancement` issues](https://github.com/jpedroschmitz/rocketdocs/labels/type%3A%20feature%20request)
  are features we're open to include.

The
[`help wanted`](https://github.com/jpedroschmitz/rocketdocs/labels/help%20wanted)
and
[`good first issue`](https://github.com/jpedroschmitz/rocketdocs/labels/good%20first%20issue)
labels are especially useful.

When you see an issue that is already assigned, please check to see if there isn't someone working on it already (maybe try asking in the issue). This is to prevent unnecessary work for everyone involved.

#### Prerequisites

- [Node.js](http://nodejs.org/) >= v12 must be installed.
- [Yarn](https://yarnpkg.com/en/docs/install)

#### Local Development

This repository uses [Yarn Workspaces][] and [changesets][] to develop multiple packages together as a monorepo. Be sure to install [Yarn][] before setting up the development environment.

To get started, clone the repository:

```sh
git clone git@github.com:LekoArts/gatsby-themes.git --depth=1
```

Install the dependencies:

```sh
yarn
```

After yarn has linked packages and installed the dependencies in the repo, you can inspect the locally available workspaces with:

```sh
yarn workspaces info
```

As all themes are set up with a respective example page (to view the theme/changes), you could for example run the "@rocketseat/gatsby-theme-docs" workspace with the example "rocketdocs" like:

```sh
yarn workspace gatsby-starter-rocketdocs start
```

## Commiting

When commiting on the repository, make sure to use the [Commitizen CLI](https://www.npmjs.com/package/commitizen) by using the `yarn commit` command. It will format your commit message following the configuration we have defined.

### Why all these rules?

We try to enforce these rules for the following reasons:

- Automatically generating changelog;
- Communicating in a better way the nature of changes;
- Triggering build and publish processes;
- Automatically determining a semantic version bump (based on the types of commits);
- Making it easier for people to contribute, by allowing them to explore a more structured commit history.

## Pull Requests

When opening a pull request, please be sure to update any relevant documentation in the READMEs or write some additional tests to ensure functionality. Also include a high-level list of changes.

### Changesets

This repository uses [changesets][] to do versioning. What that means for contributors is that you need to add a changeset by running `yarn changeset` which contains what packages should be bumped, their associated semver bump types, and some markdown which will be inserted into changelogs.

[yarn workspaces]: https://yarnpkg.com/en/docs/workspaces
[changesets]: https://github.com/atlassian/changesets
