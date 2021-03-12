import { Asset as BaseAsset } from "parcel-bundler";

export declare module "parcel-bundler" {
  export async function localRequire(
    name: string,
    path: string,
    triedInstall = false
  ): Promise<ReturnType<NodeRequire>>;

  export class Asset<T = unknown> extends BaseAsset<T> {
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
}
