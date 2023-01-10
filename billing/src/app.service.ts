import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user-request.dto';
import { OrderCreatedEvent } from './dto/order-created-event.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    // 1. get response from "auth" service, needs to subscribe it
    console.log('orderCreatedEvent: ', orderCreatedEvent);
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log('+++ get_user response: ', user);
        console.log(
          `+++ User with stripe id: ${user.stripeUserId}, price of $${orderCreatedEvent.price}`,
        );
      });
  }
}
