export = EjsAsset;
declare class EjsAsset extends ParcelBundler.Asset<any> {
  /**
   * @param {ConstructorParameters<ParcelBundler["Asset"]>[0]} name
   * @param {ConstructorParameters<ParcelBundler["Asset"]>[1]} options
   */
  constructor(
    name: [name: string, options: {}][0],
    options: [name: string, options: {}][1]
  );
}
