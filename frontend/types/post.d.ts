// frontend/src/types/post.d.ts
export type Post = {
  userId: string;
  content?: string;
  address?: string;
  location?: JSON;
  images: string[];
  tags: string[];
};
