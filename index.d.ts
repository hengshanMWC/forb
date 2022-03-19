export type packagesDir = {
  dirs: string[],
  filesPath: string[]
}
export declare function getPackagesDir (packagesPath: string = 'packages/*'): Promise<packagesDir>
