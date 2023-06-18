import { globby } from 'globby'
const DEFAULT_IGNORE = [
  '**/node_modules/**',
  '**/bower_components/**',
  '**/test/**',
  '**/tests/**',
]
export async function getPackagesDir(packagesPath, ignoreFiles = DEFAULT_IGNORE) {
  const packageJsonPath = Array.isArray(packagesPath) ? normalizePatterns(packagesPath) : normalizePatterns([packagesPath])
  const values = sortFilesName(await globby(packageJsonPath, {
    ignoreFiles
  }))
  const regExp = new RegExp('\/package\\.json$')
  const filesPath = values.filter(item => regExp.test(item))
  const dirs = filesPath.map(item => item.replace(regExp, ''))
  return { dirs, filesPath }
}

function normalizePatterns (patterns) {
  const normalizedPatterns = []
  for (const pattern of patterns) {
    // We should add separate pattern for each extension
    // for some reason, fast-glob is buggy with /package.{json,yaml,json5} pattern
    normalizedPatterns.push(
      pattern.replace(/\/?$/, '/package.json')
    )
    normalizedPatterns.push(
      pattern.replace(/\/?$/, '/package.json5')
    )
    normalizedPatterns.push(
      pattern.replace(/\/?$/, '/package.yaml')
    )
  }
  return normalizedPatterns
}

function sortFilesName (files) {
  return files.slice().sort((a, b) => a.localeCompare(b))
}
