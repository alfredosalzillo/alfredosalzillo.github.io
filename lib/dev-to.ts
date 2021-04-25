export type User = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export type Article = {
  type_of: 'article';
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: string;
  tags: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  created_at: string;
  edited_at?: any;
  crossposted_at?: any;
  published_at: string;
  last_comment_at: string;
  body_html: string;
  body_markdown: string;
  user: User;
}
export type ArticleSummary = {
  type_of: 'article';
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  published_timestamp: string;
  user: User;
}

export const getArticle = (username: string, slug: string) => fetch(`https://dev.to/api/articles/${username}/${slug}`)
  .then((response) => response.json()) as Promise<ArticleSummary>
