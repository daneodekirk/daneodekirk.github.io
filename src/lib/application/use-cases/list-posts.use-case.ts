import type { PostMetadata } from '$lib/domain/post.entity';
import GenericUseCase from '$lib/application/generic.use-case';
import type { IRepositoryManager } from '../repository-manager.interface';

class ListPostsUseCase extends GenericUseCase<PostMetadata[]> {

  constructor(repositoryManager: IRepositoryManager) {
    super(repositoryManager);
  }

  do() {
    const listRepository = this.repositoryManager.getPostRepository();
    return listRepository.list()

  }
}

export default ListPostsUseCase;
