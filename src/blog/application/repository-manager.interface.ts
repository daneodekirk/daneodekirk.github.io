import type { PostRepository } from "$blog/domain/post.repository.interface";

export interface IRepositoryManager {
  getPostRepository(): PostRepository;
}
