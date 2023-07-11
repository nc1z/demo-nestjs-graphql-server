import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/users.schema'
import { UserInput } from './input/users.input'

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: UserInput): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }
}
