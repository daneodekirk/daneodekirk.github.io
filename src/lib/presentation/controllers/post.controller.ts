import { error } from '@sveltejs/kit';
import GetPostUseCase from '$lib/application/use-cases/get-post.use-case';
import RepositoryManager from '$lib/infrastructure/repository.manager';

class PostController {

  get(id: string) {
    const repository = new RepositoryManager()
    const useCase = new GetPostUseCase(repository)

    const post = useCase.do(id);
    if (!post) throw error(404);
    return post;
  }
}

export default PostController;
