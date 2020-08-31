// @ts-check

import { Asset } from "parcel-bundler";

export as namespace ParcelBundler;

export class Asset extends Asset {
  name: string;
  type: string;
  hmrPageReload: boolean;
  contents: string;

  constructor(name: string, options: {});

  async generate(): Promise<string>;

  async getConfig<C extends {} = { [key: string]: unknown }>(
    filenames: string[]
  ): Promise<C>;

  addDependency(name: string, options: { includedInParent: boolean }): void;

  addURLDependency(
    url: string,
    name: string,
    options: { includedInParent: boolean }
  ): void;
}
