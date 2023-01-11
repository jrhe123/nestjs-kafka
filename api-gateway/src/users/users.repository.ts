import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from 'src/share/mongo.generic.repository';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserRepository extends MongoGenericRepository<User> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super(userModel);
  }
}
