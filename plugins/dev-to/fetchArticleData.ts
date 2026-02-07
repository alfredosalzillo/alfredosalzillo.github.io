import { fetchArticle } from "@/plugins/dev-to/dev-to";

export type Article = {
  url: string;
  icon: string;
  slug: string;
  title: string;
  cover: string;
  href: string;
  description: string;
  user: {
    name: string;
    username: string;
    href: string;
    profileImage: string;
  };
};

const isDevTo = (url: string) => /dev\.to/.test(url);
export const fetchArticleData = async (url: string): Promise<Article> => {
  const { host, pathname } = new URL(url);
  if (!isDevTo(host)) throw new Error(`Url ${url} is not a dev.to url`);
  const [, username, slug] = pathname.split("/");
  const data = await fetchArticle(username, slug);
  return {
    url,
    icon: "/assets/icons/dev-to_badge.svg",
    title: data.title,
    slug: data.slug,
    cover: data.cover_image,
    href: url,
    description: data.description,
    user: {
      name: data.user.name,
      username: data.user.username,
      href: `https://dev.to/${data.user.username}`,
      profileImage: data.user.profile_image_90,
    },
  };
};
