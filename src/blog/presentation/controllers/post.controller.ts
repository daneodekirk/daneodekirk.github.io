import GetPostUseCase from '$blog/application/use-cases/get-post.use-case';
import RepositoryManager from '$blog/infrastructure/repository.manager';

class PostController {

  get(id: string) {
    const repository = new RepositoryManager()
    const useCase = new GetPostUseCase(repository)

    return useCase.do(id);
  }
}

export default PostController;
