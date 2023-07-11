import { Injectable } from '@nestjs/common'
import { User } from './schemas/users.schema'
import { UsersRepository } from './users.repository'
import { UserInput } from './input/users.input'

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async create(createUserDto: UserInput): Promise<User> {
        return this.usersRepository.create(createUserDto)
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.findAll()
    }
}
