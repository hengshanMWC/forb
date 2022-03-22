export type packagesDir = {
  dirs: string[],
  filesPath: string[]
}
export declare function getPackagesDir (packagesPath: string | string[] = 'packages/*'): Promise<packagesDir>
