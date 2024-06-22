import type { PostRepository } from '$lib/domain/post.repository';

export class PostFromFileSystem implements PostRepository {
  get(id: string) {
    const post = import(`#root/markdown/${id}.md`);
    return post;
  }
}
