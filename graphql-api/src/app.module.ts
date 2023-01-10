import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // code first approach
      autoSchemaFile: true,
    }),
    // modules
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
