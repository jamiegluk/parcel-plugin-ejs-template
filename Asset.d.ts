// @ts-check

import { Asset } from "parcel-bundler";

export as namespace ParcelBundler;

export class Asset<T = unknown> extends Asset {
  name: string;
  type: string;
  hmrPageReload: boolean;
  contents: string;
  ast: T;

  constructor(name: string, options: {});

  async parse(code: string): Promise<T>;

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
