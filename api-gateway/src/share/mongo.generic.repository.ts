import { FilterQuery, Model } from 'mongoose';
import { IGenericRepository } from './generic.repository';

export abstract class MongoGenericRepository<T>
  implements IGenericRepository<T>
{
  constructor(private readonly model: Model<T>) {}

  async findOne(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    console.log('+++++++++: ', projection);
    return this.model
      .findOne(filterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T[]> {
    return this.model
      .find(filterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async create(item: T): Promise<T> {
    return this.model.create(item);
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<T>,
    item: Partial<T | null>,
  ): Promise<T | null> {
    // return the updated one
    return this.model.findOneAndUpdate(filterQuery, item, { new: true }).exec();
  }

  async deleteMany(filterQuery: FilterQuery<T>): Promise<boolean> {
    const res = await this.model.deleteMany(filterQuery);
    return res.deletedCount >= 1;
  }
}
