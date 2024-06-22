import type { PostMetadata } from '$lib/domain/post.entity';
import type GenericRepository from '$lib/gateways/generic.repository';
import GenericUseCase from './generic.use-case';

class ListPostsUseCase extends GenericUseCase<PostMetadata[]> {
  constructor(repo: GenericRepository<PostMetadata[]>) {
    super(repo);
  }

  do(): Promise<PostMetadata[]> {
    return this.repo.get() as Promise<PostMetadata[]>;
  }
}

export default ListPostsUseCase;
