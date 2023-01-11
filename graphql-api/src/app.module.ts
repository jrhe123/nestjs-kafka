import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // code first approach
      autoSchemaFile: true,
    }),
    // modules
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
