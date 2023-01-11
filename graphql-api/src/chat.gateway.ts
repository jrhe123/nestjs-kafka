import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(80, {
  cors: {
    origin: `*`,
  },
})
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    // send message to everyone
    this.server.emit('message', message);
  }
}
