import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { IGenericRepository } from './generic.repository';

@Injectable()
export class MongoGenericRepository<T> implements IGenericRepository<T> {
  constructor(private readonly model: Model<T>) {}

  findOne(filterQuery: FilterQuery<T>): Promise<T> {
    return this.model.findOne(filterQuery).exec();
  }

  find(filterQuery: FilterQuery<T>): Promise<T[]> {
    return this.model.find(filterQuery).exec();
  }
  create(item: T): Promise<T> {
    return this.model.create(item);
  }
  findOneAndUpdate(filterQuery: FilterQuery<T>, item: Partial<T>) {
    return this.model.findOneAndUpdate(filterQuery, item);
  }
}
