import { User } from 'src/users/schemas/user.schema';

export const userStub = (): User => {
  return {
    userId: '123',
    email: 'roytest@gmail.com',
    age: 20,
    favoriteFoods: ['apple', 'pizza'],
  };
};
