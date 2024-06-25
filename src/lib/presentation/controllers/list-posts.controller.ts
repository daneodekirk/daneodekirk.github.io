import ListPostsUseCase from '$lib/application/use-cases/list-posts.use-case';
import RepositoryManager from '$lib/infrastructure/repository.manager';

class ListPostsController {

  list() {
    const repository = new RepositoryManager()
    const useCase = new ListPostsUseCase(repository)
    return useCase.do()
  }
}

export default ListPostsController;
