import postcss from "postcss";
import autoprefixer from "autoprefixer";
import type { ModuleLoader, ModuleLoaderEnv, ModuleLoaderOutput } from "aleph/server/types.ts";
import { parse, lex } from "https://deno.land/x/css@0.2.0/mod.ts";
import * as parsel from './parsel.js'
import { camelCase } from "https://deno.land/x/case/mod.ts";
import { encode, decode } from "https://deno.land/std/encoding/base64.ts"
import { basename } from "https://deno.land/std@0.170.0/path/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import ShortUniqueId from 'https://cdn.jsdelivr.net/npm/short-unique-id@latest/short_uuid/mod.ts';

const uid = new ShortUniqueId();


const uniques = new Map<string, string>()
const uniqueComponentClassPrefix = (specifier: string) => {
  if (uniques.has(specifier)) {
    return uniques.get(specifier)
  }
  const [componentName] = basename(specifier).split('.')
  const componentClassPrefix = [componentName, uid(12)].join('_')
  uniques.set(specifier, componentClassPrefix)
  return componentClassPrefix
}

export type CssModuleLoaderOptions = {

}

export class CssModuleLoader implements ModuleLoader {
  #options: CssModuleLoaderOptions;

  constructor(options: CssModuleLoaderOptions) {
    this.#options = options ?? {};
  }

  test(path: string): boolean {
    return path.endsWith(".module.css");
  }

  async load(specifier: string, content: string, env: ModuleLoaderEnv): Promise<ModuleLoaderOutput> {
    const ret = await postcss([autoprefixer]).process(content);
    const selectors = lex(ret.css)
      .filter((token) => token.type === 'selector')
      .map((token) => token.text)
      .flatMap(parsel.tokenize)
      .filter((token: any) => token.type === 'class')
      .map((token: any) => token.name as string) as string[]
    const names = selectors.reduce((acc, name) => ({
      ...acc,
      [camelCase(name)]: `${uniqueComponentClassPrefix(specifier)}__${name}`,
    }), {} as { [key: string]: string })
    const css = selectors.reduce((acc, name) => {
      return acc.replace(new RegExp(`\\.${name}\\b`, 'g'), `.${names[camelCase(name)]}`)
    }, ret.css)
    return {
      code: `export default ${JSON.stringify(names)};`,
      lang: "js",
      inlineCSS: css,
    };
  }
}