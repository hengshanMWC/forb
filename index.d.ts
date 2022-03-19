export type packagesDir = {
  dirs: string[],
  filesPath: string[]
}
export type getPackagesDir = 
  (packagesPath: string = 'packages/*') => Promise<packagesDir>