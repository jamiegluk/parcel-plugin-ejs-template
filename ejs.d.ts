import type ejsOriginal from "ejs";

export as namespace ejsx;

export type Includer = (originalPath: string, parsedPath: string) => void;

export type ejsExtended = typeof ejsOriginal & {
  compile: (
    code: string,
    options: ejs.Options & {
      includer: Includer;
    }
  ) => ejs.ClientFunction;
};
