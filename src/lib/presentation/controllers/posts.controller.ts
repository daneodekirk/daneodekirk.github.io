import GetPostUseCase from '$lib/application/use-cases/get-post.use-case';

class PostsController {
  private readonly getPostUseCase: GetPostUseCase;

  constructor(getPostUseCase: GetPostUseCase) {
    this.getPostUseCase = getPostUseCase;
  }

  execute(id: string) {
    const posts = this.getPostUseCase.do(id);
    return posts;
  }
}

export default PostsController;
