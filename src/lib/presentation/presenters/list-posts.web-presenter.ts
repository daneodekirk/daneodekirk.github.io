import { PostsFromFileSystem } from '$lib/infrastructure/database/posts.file-system';
import { error } from '@sveltejs/kit';
import ListPostsController from '../controllers/list-posts.controller';
import ListPostsUseCase from '$lib/application/use-cases/list-posts.use-case';

class ListPostsWebPresenter {
  async view() {
    const repository = new PostsFromFileSystem();
    const useCase = new ListPostsUseCase(repository);
    const controller = new ListPostsController(useCase);

    const posts = await controller.execute();

    if (!posts) throw error(404);

    return { posts };
  }
}

export default ListPostsWebPresenter;
