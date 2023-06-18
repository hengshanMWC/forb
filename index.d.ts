export type packagesDir = {
  dirs: string[],
  filesPath: string[]
}
export declare function getPackagesDir (packagesPath: string | string[], ignoreFiles?: string | string[]): Promise<packagesDir>
