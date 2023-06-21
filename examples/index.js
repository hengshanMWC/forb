import { getPackagesDir } from '../index.js'
getPackagesDir([ 'packages/*', '.'])
  .then(({ dirs, filesPath}) => {
    const _dirs = [ '.', 'packages/a', 'packages/b', 'packages/c', 'packages/d', 'packages/e' ]
    const _filesPath = [
      'package.json',
      'packages/a/package.json',
      'packages/b/package.json',
      'packages/c/package.json',
      'packages/d/package.json',
      'packages/e/package.json',
    ]
    console.log(dirs, _dirs.every((item, index) => item === dirs[index]))
    console.log(filesPath, _filesPath.every((item, index) => item === filesPath[index]))
  })


