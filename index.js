const glob = require('glob')
const { join } = require('path')
exports.getPackagesDir = function getPackagesDir(packagesPath = 'packages/*') {
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