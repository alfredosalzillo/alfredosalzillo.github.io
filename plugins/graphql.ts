import type { LoaderPlugin } from 'https://deno.land/x/aleph@v0.3.0-alpha.32/types.ts';

export type GraphqlPluginOptions = {
  test?: LoaderPlugin['test'],
  endpoint?: string,
  headers?: HeadersInit,
  variables?: Record<string, string | number | Array<any>>,
}

const graphqlPlugin = (options: GraphqlPluginOptions = {}): LoaderPlugin => {
  const {
    test = /\.graphql$/i,
    endpoint = '/graphql',
    headers: customHeaders = {},
    variables = {},
  } = options;
  const headers = new Headers(customHeaders);
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  return ({
    name: 'graphql-plugin',
    type: 'loader',
    test: /\.graphql$/i,
    acceptHMR: true,
    resolve: (url) => {
      const content = Deno.readTextFileSync(`${Deno.cwd()}${url}`)
      return {
        url,
        data: content,
        external: false,
      }
    },
    load: async (input, app) => {
      const { url, data } = input
      const query = data
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
        code: `export default ${JSON.stringify(result)}`
      }
    }
  })
}

export default graphqlPlugin
