import type ListPostsUseCase from '$lib/application/use-cases/list-posts.use-case';

class ListPostsController {
  private readonly listPostsUseCase: ListPostsUseCase;

  constructor(listPostUseCase: ListPostsUseCase) {
    this.listPostsUseCase = listPostUseCase;
  }

  execute() {
    const posts = this.listPostsUseCase.do();
    return posts;
  }
}

export default ListPostsController;
