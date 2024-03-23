import slugify from "slugify";
import type { Post } from "~/types/post";

export const slugifyPost = (post: Post) => {
  return `${slugify(post.title)}-${post.id}`;
};
