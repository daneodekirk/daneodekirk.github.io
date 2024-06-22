import type { IRepositoryManager } from "./repository-manager.interface";

abstract class GenericUseCase<T> {
  protected repositoryManager: IRepositoryManager;

  constructor(repositoryManager: IRepositoryManager) {
    this.repositoryManager = repositoryManager;
  }

  do(_id: string): Promise<T> {
    throw new Error('.do() must be implemented in your use case');
  }
}

export default GenericUseCase;
