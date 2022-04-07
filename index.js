import { globby } from 'globby'
export async function getPackagesDir(packagesPath) {
  const ignore = '!**/node_modules'
  const params = Array.isArray(packagesPath) ? [...packagesPath, ignore] : [packagesPath, ignore]
  const values = await globby(params)
  const regExp = new RegExp('\/package\\.json$')
  const filesPath = values.filter(item => regExp.test(item))
  const dirs = filesPath.map(item => item.replace(regExp, ''))
  return { dirs, filesPath }
}