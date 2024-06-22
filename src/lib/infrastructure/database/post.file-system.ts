import type { Post } from '$lib/domain/post.entity';
import type { PostRepository } from '$lib/domain/post.repository.interface';

export class PostFromFileSystem implements PostRepository {
  get(id: string) {
    const post = import(`#root/markdown/${id}.md`);
    return post;
  }

  list() {
    const files = import.meta.glob(`#root/markdown/*.md`);
    const fileList = Object.entries(files).map(async ([_, resolver]) => {
      const { metadata } = (await resolver()) as Post;
      return metadata;
    });

    return Promise.all(fileList);
  }
}
