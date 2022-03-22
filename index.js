import glob from 'glob'
import { join } from 'path'
export function getPackagesDir(packagesPath = 'packages/*') {
  return new Promise((resolve, reject) => {
    glob(packagesPath, {}, function (err, matches) {
      if (err) {
        reject(err)
      } else {
        const filesPath = matches.map((dir) => join(dir, 'package.json'))
        resolve({dirs: matches, filesPath})
      }
    })
  })
}