/// <reference path="types/parcel-bundler.d.ts" />
export = EjsAsset;
/**
 * @extends {Asset<ejs.ClientFunction>}
 */
declare class EjsAsset extends Asset<ejs.ClientFunction> {
    /**
     * @param {string} name
     * @param {{}} options
     */
    constructor(name: string, options: {});
}
import { Asset } from "parcel-bundler";
