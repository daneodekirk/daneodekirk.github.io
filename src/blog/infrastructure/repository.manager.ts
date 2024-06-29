import type { IRepositoryManager } from "$blog/application/repository-manager.interface";
import type { PostRepository } from "$blog/domain/post.repository.interface";
import { PostFromFileSystem } from "./database/post.file-system";

class RepositoryManager implements IRepositoryManager {
    private readonly postRepository: PostRepository;

    constructor() {
      this.postRepository = new PostFromFileSystem();
    }

    getPostRepository() {
      return this.postRepository;
    }

}

export default RepositoryManager;
