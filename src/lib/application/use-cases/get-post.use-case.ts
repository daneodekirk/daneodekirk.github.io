import type { Post } from '$lib/domain/post.entity';
import type GenericRepository from '$lib/gateways/generic.repository';
import GenericUseCase from './generic.use-case';

class GetPostUseCase extends GenericUseCase<Post> {
  constructor(repo: GenericRepository<Post>) {
    super(repo);
  }

  do(id: string): Promise<Post> {
    return this.repo.get(id) as Promise<Post>;
  }
}

export default GetPostUseCase;
