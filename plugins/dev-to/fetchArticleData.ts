import client from "@/plugins/dev-to/client";
import type { components } from "@/plugins/dev-to/schema-v1";

export type Article = {
  url: string;
  icon: string;
  slug: string;
  title: string;
  cover: string | null;
  href: string;
  description: string;
  user: {
    name: string;
    username: string;
    href: string;
  };
};

const isDevTo = (url: string) => /dev\.to/.test(url);
export const fetchArticleData = async (url: string): Promise<Article> => {
  const { host, pathname } = new URL(url);
  if (!isDevTo(host)) throw new Error(`Url ${url} is not a dev.to url`);
  const [, username, slug] = pathname.split("/");
  const response = await client.GET("/articles/{username}/{slug}", {
    params: {
      path: {
        username,
        slug,
      },
    },
  });
  if (!response.data) throw new Error(`Article ${url} not found`);
  const data =
    response.data as unknown as components["schemas"]["ArticleIndex"];
  return {
    url,
    icon: "/assets/icons/dev-to_badge.svg",
    title: data.title,
    slug: data.slug,
    cover: data.cover_image,
    href: url,
    description: data.description,
    user: {
      name: data.user.name ?? "Anonymous",
      username: data.user.username ?? "anonymous",
      href: `https://dev.to/${data.user.username ?? "anonymous"}`,
    },
  };
};
