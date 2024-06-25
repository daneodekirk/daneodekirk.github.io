import GenericUseCase from '$lib/application/generic.use-case';
import { compareDesc } from 'date-fns';
import type { PostMetadata } from '$lib/domain/post.entity';
import type { IRepositoryManager } from '$lib/application/repository-manager.interface';

class ListPostsByDateUseCase extends GenericUseCase<PostMetadata[]> {

  constructor(repositoryManager: IRepositoryManager) {
    super(repositoryManager);
  }

  async do() {
    const listRepository = this.repositoryManager.getPostRepository();
    const posts = await listRepository.list()

    const sortedPosts = posts.sort((current, next) => compareDesc(current.date, next.date))
    return sortedPosts;
  }

}

export default ListPostsByDateUseCase;
