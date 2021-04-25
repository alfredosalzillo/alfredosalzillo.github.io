type GithubRepository = {
  name: string,
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
  },
  url: string,
  html_url: string,
}

export const getRepository = (owner: string, repo: string) => fetch(`https://api.github.com/repos/${owner}/${repo}`)
  .then((response) => response.json()) as Promise<GithubRepository>;
