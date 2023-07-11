import { Module } from '@nestjs/common'
import { UsersResolver } from './users.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schemas/users.schema'
import { UsersService } from './users.service'
import { UsersRepository } from './users.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
