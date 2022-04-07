import { getPackagesDir } from '../index.js'
getPackagesDir([ 'packages/**' ])
  .then(({ dirs, filesPath}) => {
    const _dirs = [ 'packages/a', 'packages/b', 'packages/cc' ]
    const _filesPath = [
      'packages/a/package.json',
      'packages/b/package.json',
      'packages/cc/package.json'
    ]
    console.log(dirs, _dirs.every((item, index) => item === dirs[index]))
    console.log(filesPath, _filesPath.every((item, index) => item === filesPath[index]))
  })