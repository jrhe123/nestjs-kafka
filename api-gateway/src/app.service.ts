import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './dto/create-order-request.dto';
import { OrderCreatedEvent } from './dto/order-created-event.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderRequest: CreateOrderRequest) {
    const { userId, price } = createOrderRequest;
    // skip create order steps here
    const orderId = '123321';
    // after that, we emit the event to "billing"
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent(orderId, userId, price),
    );
  }
}
