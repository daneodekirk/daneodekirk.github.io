import type { PostMetadata } from './post.entity';

export interface PostsRepository {
  get(): Promise<PostMetadata[]>;
}
