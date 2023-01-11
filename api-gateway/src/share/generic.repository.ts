import { FilterQuery } from 'mongoose';

export abstract class IGenericRepository<T> {
  abstract findOne(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null>;

  abstract find(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T[]>;

  abstract create(item: T): Promise<T>;

  abstract findOneAndUpdate(
    filterQuery: FilterQuery<T>,
    item: Partial<T>,
  ): Promise<T | null>;

  abstract deleteMany(filterQuery: FilterQuery<T>): Promise<boolean>;
}
