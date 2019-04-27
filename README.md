# pages-tasks

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A preset static pages project gulp tasks

## Installation

```shell
$ yarn add pages-tasks

# or npm
$ npm install pages-tasks
```

## Usage

gulpfile.js

```js
module.exports = require('pages-tasks')
```

package.json

```json
{
  "scripts": {
    "clean": "gulp clean",
    "lint": "gulp lint",
    "serve": "gulp serve",
    "build": "gulp build",
    "start": "gulp start",
    "deploy": "gulp deploy --production"
  }
}
```

then

```shell
$ yarn <task> [options]
```

### e.g.

```shell
$ yarn serve --port 5210 --open
$ yarn build --production
```

## All Tasks

### lint

Lint styles & scripts files.

### compile

Compile styles & scripts & pages file.

### serve

Running an automated development server.

#### options

- `port`: Server port, Default: `2080`
- `open`: Automatically open browser, Default: `false`

### build

Build the entire project to get releasable files.

#### options

- `production`: Production mode, Default: `false`
- `prod`: Alias to `production`

### start

Running projects in production mode.

#### options

- `port`: Server port, Default: `2080`
- `open`: Automatically open browser, Default: `false`

### deploy

Deploy build results to [GitHub Pages](https://pages.github.com).

#### options

- `branch`: The name of the branch you'll be pushing to, Default: `'gh-pages'`

### clean

Clean dist & temp files.

## Folder Structure

```
└── my-project ······································· proj root
   ├─ public ········································· static dir (unprocessed)
   ├─ src ············································ source dir
   │  ├─ assets ······································ assets dir
   │  │  ├─ fonts ···································· fonts dir (imagemin)
   │  │  ├─ images ··································· images dir (imagemin)
   │  │  ├─ scripts ·································· scripts dir (babel / uglify)
   │  │  └─ styles ··································· styles dir (scss / postcss)
   │  ├─ layouts ····································· layouts dir (dont output)
   │  ├─ partials ···································· partials dir (dont output)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .editorconfig ·································· editor config file
   ├─ .gitignore ····································· git ignore file
   ├─ .travis.yml ···································· travis ci config file
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   └─ package.json ··································· package file
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://travis-ci.org/zce/pages-tasks.svg?branch=master
[travis-url]: https://travis-ci.org/zce/pages-tasks
[license-image]: https://img.shields.io/github/license/zce/pages-tasks.svg
[license-url]: https://github.com/zce/pages-tasks/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/pages-tasks.svg
[dependency-url]: https://david-dm.org/zce/pages-tasks
[devdependency-image]: https://img.shields.io/david/dev/zce/pages-tasks.svg
[devdependency-url]: https://david-dm.org/zce/pages-tasks?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
