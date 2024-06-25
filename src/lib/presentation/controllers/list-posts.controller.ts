import ListPostsByDateUseCase from '$lib/application/use-cases/list-posts-by-date.use-case';
import RepositoryManager from '$lib/infrastructure/repository.manager';

class ListPostsController {

  list() {
    const repository = new RepositoryManager()
    const useCase = new ListPostsByDateUseCase(repository)
    return useCase.do()
  }
}

export default ListPostsController;
