import { error } from '@sveltejs/kit';
import ListPostsUseCase from '$lib/application/use-cases/list-posts.use-case';
import RepositoryManager from '$lib/infrastructure/repository.manager';

class ListPostsController {

  list() {
    const repository = new RepositoryManager()
    const useCase = new ListPostsUseCase(repository)

    const posts = useCase.do()
    if (!posts) throw error(404);
    return posts;
  }
}

export default ListPostsController;
