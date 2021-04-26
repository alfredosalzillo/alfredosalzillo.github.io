export const graphql = <T = any>(strings: TemplateStringsArray) => {
  const query = strings.join('');
  return (variables: T) => ({
    query,
    variables,
  })
};
export type GraphqlQueryParams<V> = {
  query: string,
  variables?: V,
}

