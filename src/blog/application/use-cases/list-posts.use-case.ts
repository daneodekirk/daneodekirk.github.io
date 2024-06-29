import GenericUseCase from '$blog/application/generic.use-case';
import type { PostMetadata } from '$blog/domain/post.entity';
import type { IRepositoryManager } from '$blog/application/repository-manager.interface';

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
