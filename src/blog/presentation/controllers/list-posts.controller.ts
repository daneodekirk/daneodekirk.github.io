import ListPostsByDateUseCase from '$blog/application/use-cases/list-posts-by-date.use-case';
import RepositoryManager from '$blog/infrastructure/repository.manager';

class ListPostsController {

  list() {
    const repository = new RepositoryManager()
    const useCase = new ListPostsByDateUseCase(repository)
    return useCase.do()
  }
}

export default ListPostsController;
