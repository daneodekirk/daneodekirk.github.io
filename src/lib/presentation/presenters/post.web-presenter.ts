import GetPostUseCase from '$lib/application/use-cases/get-post.use-case';
import PostsController from '$lib/presentation/controllers/posts.controller';
import { PostFromFileSystem } from '$lib/infrastructure/database/post.file-system';
import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';

class WebPresenter {
  async view(id: string) {
    const repository = new PostFromFileSystem();
    const useCase = new GetPostUseCase(repository);
    const controller = new PostsController(useCase);

    const view = await controller.execute(id);

    if (!view) throw error(404);

    const { title, date } = view.metadata; // thanks mdsvex
    const content = render(view.default, { props: {} }).body;

    return {
      title,
      date,
      content,
    };
  }
}

export default WebPresenter;
