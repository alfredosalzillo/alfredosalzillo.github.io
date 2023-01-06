import {ModuleLoader, ModuleLoaderEnv, ModuleLoaderOutput} from "aleph/server/types.ts";

export type GraphqlLoaderOptions = {
  test?: RegExp,
  endpoint?: string,
  headers?: HeadersInit,
  variables?: Record<string, string | number | Array<any>>,
}

export class GraphQlLoader implements ModuleLoader {
  readonly #options: GraphqlLoaderOptions;

  constructor(options: GraphqlLoaderOptions) {
    this.#options = options ?? {};
  }

  test(path: string): boolean {
    const {
      test = /\.graphql$/i,
    } = this.#options;
    return test.test(path);
  }

  async load(specifier: string, content: string, env: ModuleLoaderEnv): Promise<ModuleLoaderOutput> {
    const {
      endpoint = '/graphql',
      headers = {},
      variables = {},
    } = this.#options;
    const query = content
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        query,
        variables,
      })
    }).then(async (response) => {
      if (response.ok) return response.json();
      throw await response.json()
    })
    return {
      code: `export default ${JSON.stringify(result)}`,
      lang: 'js',
    }
  }
}
