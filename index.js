import {globby} from 'globby'
import { join } from 'path'
export function getPackagesDir(packagesPath = 'packages/*') {
  return globby(packagesPath)
      .then (dirs => {
        const filesPath = dirs.map((dir) => join(dir, 'package.json'))
        return { dirs, filesPath }
      })
}