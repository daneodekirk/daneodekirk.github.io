import ListPostsController from "$blog/presentation/controllers/list-posts.controller";
import { error } from "@sveltejs/kit";

export const load = async () => {
  const posts = await new ListPostsController().list();
  if (!posts) throw error(404);
  return { posts };
}
