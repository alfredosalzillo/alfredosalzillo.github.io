import sass from "https://deno.land/x/denosass@1.0.6/mod.ts";
import type { ModuleLoader, ModuleLoaderEnv, ModuleLoaderOutput } from "aleph/server/types.ts";
import { lex } from "https://deno.land/x/css@0.2.0/mod.ts";
import { camelCase } from "https://deno.land/x/case@2.1.1/mod.ts";
import { basename } from "https://deno.land/std@0.170.0/path/mod.ts";
import ShortUniqueId from 'https://cdn.jsdelivr.net/npm/short-unique-id@latest/short_uuid/mod.ts';
import * as parsel from './parsel.js'

const uid = new ShortUniqueId();
const componentClassPrefixes = new Map<string, string>()
const uniqueComponentClassPrefix = (specifier: string) => {
  if (componentClassPrefixes.has(specifier)) {
    return componentClassPrefixes.get(specifier)
  }
  const [componentName] = basename(specifier).split('.')
  const componentClassPrefix = [componentName, uid(12)].join('_')
  componentClassPrefixes.set(specifier, componentClassPrefix)
  return componentClassPrefix
}

const extractClassNames = (css: string) => [...new Set(lex(css)
  .filter((token) => token.type === 'selector')
  .map((token) => token.text)
  .flatMap(parsel.tokenize)
  .filter((token: any) => token.type === 'class')
  .map((token: any) => token.name as string) as string[])]

const isModule = (path: string) => path.endsWith(".module.css") || path.endsWith(".module.scss")
const isGlobalCss = (path: string) => !isModule(path) && (path.endsWith(".css") || path.endsWith(".scss"))

export type CssModuleLoaderOptions = {

}

export class ScssLoader implements ModuleLoader {
  #options: CssModuleLoaderOptions;

  constructor(options: CssModuleLoaderOptions) {
    this.#options = options ?? {};
  }

  test(path: string): boolean {
    return isModule(path) || isGlobalCss(path);
  }

  async load(specifier: string, content: string, env: ModuleLoaderEnv): Promise<ModuleLoaderOutput> {
    const compiledCSS = sass(content).to_string('compressed') as string
    if (isGlobalCss(specifier)) {
      return {
        code: `export default null`,
        lang: 'ts',
        inlineCSS: compiledCSS,
      }
    }
    const classNames = extractClassNames(compiledCSS)
    const uniqueClassNamesMap = classNames.reduce((acc, name) => ({
      ...acc,
      [camelCase(name)]: `${uniqueComponentClassPrefix(specifier)}__${name}`,
    }), {} as { [key: string]: string })
    const inlineCSS = classNames.reduce((acc, name) => {
      return acc.replace(new RegExp(`\\.${name}\\b`, 'g'), `.${uniqueClassNamesMap[camelCase(name)]}`)
    }, compiledCSS)
    return {
      code: `export default ${JSON.stringify(uniqueClassNamesMap)};`,
      lang: "js",
      inlineCSS,
    };
  }
}