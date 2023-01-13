import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType() // graphql
@Schema({ collection: 'users' }) // mongoose
export class User {
  @Field()
  @Prop()
  userId: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  age: number;

  @Field(() => [String]) // graphql
  @Prop([String]) // mongoose
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
