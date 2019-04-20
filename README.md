# pages-tasks

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
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

<!-- TODO: Introduction of API use -->

```javascript
const pagesTasks = require('pages-tasks')
const result = pagesTasks('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### pagesTasks(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add pages-tasks

# or npm
$ npm install pages-tasks -g
```

```shell
$ pages-tasks --help

  Usage: pages-tasks <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
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

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me)



[travis-image]: https://img.shields.io/travis/zce/pages-tasks.svg
[travis-url]: https://travis-ci.org/zce/pages-tasks
[downloads-image]: https://img.shields.io/npm/dm/pages-tasks.svg
[downloads-url]: https://npmjs.org/package/pages-tasks
[version-image]: https://img.shields.io/npm/v/pages-tasks.svg
[version-url]: https://npmjs.org/package/pages-tasks
[license-image]: https://img.shields.io/github/license/zce/pages-tasks.svg
[license-url]: https://github.com/zce/pages-tasks/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/pages-tasks.svg
[dependency-url]: https://david-dm.org/zce/pages-tasks
[devdependency-image]: https://img.shields.io/david/dev/zce/pages-tasks.svg
[devdependency-url]: https://david-dm.org/zce/pages-tasks?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
