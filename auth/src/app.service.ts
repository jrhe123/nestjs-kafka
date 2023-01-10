import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto/get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: {
    userId: string;
    stripeUserId: string;
  }[] = [
    {
      userId: '123',
      stripeUserId: '123-stripe',
    },
    {
      userId: '456',
      stripeUserId: '456-stripe',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log('--- auth received: ', getUserRequest);
    return this.users.find((u) => u.userId === getUserRequest.userId);
  }
}
