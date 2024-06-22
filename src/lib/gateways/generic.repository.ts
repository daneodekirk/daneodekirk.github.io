abstract class GenericRepository<T> {
  constructor() {
    if (this.constructor == GenericRepository)
      throw new Error('Abstract class cannot be instantiated :)');
  }

  get(_id?: string): T | Promise<T> {
    throw new Error('.get() needs to be implemented by your repo');
  }
}

export default GenericRepository;
