import type { PostRepository } from "$lib/domain/post.repository.interface";

export interface IRepositoryManager {
  getPostRepository(): PostRepository;
}
