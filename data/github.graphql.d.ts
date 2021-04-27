export type AllPinnedRepositories = {
  data: {
    user: {
      pinnedItems: {
        nodes: {
          name: string,
          nameWithOwner: string,
          description: string,
          url: string,
          owner: {
            login: string,
            avatarUrl: string,
            url: string
          }
        }[]
      }
    }
  }
}

declare const data: AllPinnedRepositories
export default data
