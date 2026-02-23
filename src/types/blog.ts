export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  tags: string[];
}
