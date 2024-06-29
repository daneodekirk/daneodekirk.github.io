import type { Post, PostMetadata } from './post.entity';

export interface PostRepository {

  get(id: string): Promise<Post>;

  list(): Promise<PostMetadata[]>;
}
