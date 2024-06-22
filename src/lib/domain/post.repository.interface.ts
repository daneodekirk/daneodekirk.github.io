import type { Post, PostMetadata } from './post.entity';

// rename to post.access.interface?
export interface PostRepository {

  get(id: string): Promise<Post>;

  list(): Promise<PostMetadata[]>;
}
