import GenericUseCase from '$lib/application/generic.use-case';
import type { Post } from '$lib/domain/post.entity';
import type { IRepositoryManager } from '../repository-manager.interface';

class GetPostUseCase extends GenericUseCase<Post> {
  constructor(repositoryManager: IRepositoryManager) {
    super(repositoryManager);
  }

  do(id: string) {
    const postRepository = this.repositoryManager.getPostRepository();
    return postRepository.get(id)
  }
}

export default GetPostUseCase;
