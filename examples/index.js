import { getPackagesDir } from '../index.js'
getPackagesDir()
  .then(({ dirs, filesPath}) => {
    const _dirs = [ 'packages/a', 'packages/b', 'packages/cc' ]
    const _filesPath = [
      'packages/a/package.json',
      'packages/b/package.json',
      'packages/cc/package.json'
    ]
    console.log(dirs.every((item, index) => item === _dirs[index]))
    console.log(filesPath.every((item, index) => item === _filesPath[index]))
  })