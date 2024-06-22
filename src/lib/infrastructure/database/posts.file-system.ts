import type { Post } from '$lib/domain/post.entity';
import type { PostsRepository } from '$lib/domain/posts.repository';

export class PostsFromFileSystem implements PostsRepository {
  get() {
    const files = import.meta.glob(`#root/markdown/*.md`);
    const fileList = Object.entries(files).map(async ([_, resolver]) => {
      const { metadata } = (await resolver()) as Post;
      return metadata;
    });

    return Promise.all(fileList);
  }
}
