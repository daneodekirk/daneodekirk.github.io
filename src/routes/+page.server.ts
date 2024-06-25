import ListPostsController from "$lib/presentation/controllers/list-posts.controller";

export const load = async () => {
  const posts = await new ListPostsController().list();
  if (!posts) throw error(404);
  return { posts };
}
