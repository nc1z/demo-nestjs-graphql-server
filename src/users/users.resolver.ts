import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UserInput } from './input/users.input'

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(() => String)
    async hello() {
        return `hello world`
    }

    @Query(() => [CreateUserDto])
    async users() {
        return this.usersService.findAll()
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args(`input`) input: UserInput) {
        return this.usersService.create(input)
    }
}
