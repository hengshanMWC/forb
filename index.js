import { globby } from 'globby'
export async function getPackagesDir(packagesPath) {
  const values = await globby(packagesPath)
  const regExp = new RegExp('\/package\\.json$')
  const filesPath = values.filter(item => regExp.test(item))
  const dirs = filesPath.map(item => item.replace(regExp, ''))
  return { dirs, filesPath }
}