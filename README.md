# Features

Get the directory path of `packages` and `packages.json` path

# Usage

```
|--packages
|   |-- a
|      |-- package.json
|   |-- b
|      |-- package.json
|   |-- cc
|      |-- package.json
```

```js
const { getPackagesDir } = require("@mwc/forb");
/**
 * Get package directory path
 * @params [string='packages/*'] packages path(glob string
 * @returns [{dirs: Array, filesPath: Array}]
 */
const { dirs, filesPath } = await getPackagesDir("packages/*");
// dirs: [ 'packages/a', 'packages/b', 'packages/cc' ]
// filesPath: [ 'packages/a/package.json', 'packages/b/package.json', 'packages/cc/package.json' ]
```

# Install

```
npm i @mwc/forb
```
