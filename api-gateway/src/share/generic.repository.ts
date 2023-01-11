import { FilterQuery } from 'mongoose';

export abstract class IGenericRepository<T> {
  abstract findOne(filterQuery: FilterQuery<T>): Promise<T>;

  abstract find(filterQuery: FilterQuery<T>): Promise<T[]>;

  abstract create(item: T): Promise<T>;

  abstract findOneAndUpdate(filterQuery: FilterQuery<T>, item: Partial<T>);
}
