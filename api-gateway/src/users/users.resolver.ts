import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { UpdateUserInput } from './dto/input/update-user-input.dto';
import { User } from './schemas/user.schema';

import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersService.getUserById(getUserArgs.userId);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(
      createUserData.email,
      createUserData.age,
    );
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.updateUser(updateUserData.userId, {
      age: updateUserData.age,
      favoriteFoods: updateUserData.favoriteFoods,
    });
  }
}
