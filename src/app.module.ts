import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
