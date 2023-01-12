import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from '../share/mongo.generic.repository';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository extends MongoGenericRepository<User> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
