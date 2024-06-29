import type { Post } from '$blog/domain/post.entity';
import type { PostRepository } from '$blog/domain/post.repository.interface';

export class PostFromFileSystem implements PostRepository {
  get(id: string) {
    const post = import(`$md/${id}.md`);
    return post;
  }

  list() {
    const files = import.meta.glob(`$md/*.md`);
    const fileList = Object.entries(files).map(async ([_, resolver]) => {
      const { metadata } = (await resolver()) as Post;
      return metadata;
    });

    return Promise.all(fileList);
  }
}
