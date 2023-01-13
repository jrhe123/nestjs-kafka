import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { DatabaseModule } from './database/database.module';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'BILLING_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'billing-consumer',
          },
        },
      },
    ]),
    UsersModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // code first approach
      autoSchemaFile: true,
    }),
    // mongo persitent kafka
    KafkaModule,
    //
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
