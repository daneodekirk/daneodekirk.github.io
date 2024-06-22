import type { Post } from './post.entity';

export interface PostRepository {
  get(id: string): Promise<Post>;
}
