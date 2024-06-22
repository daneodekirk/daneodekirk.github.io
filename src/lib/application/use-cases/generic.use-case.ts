import type GenericRepository from '$lib/gateways/generic.repository';

class GenericUseCase<T> {
  repo: GenericRepository<T>;

  constructor(repo: GenericRepository<T>) {
    if (this.constructor == GenericUseCase)
      throw new Error('Abstract class cannot be instantiated :)');
    this.repo = repo;
  }

  execute(_id: string) {
    throw new Error('.execute() must be implemented in your use case');
  }
}

export default GenericUseCase;
