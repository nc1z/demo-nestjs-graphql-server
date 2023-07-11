import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class UsersResolver {
    //   constructor(
    //     private authorsService: AuthorsService,
    //     private postsService: PostsService,
    //   ) {}

    @Query(() => String)
    async hello() {
        return `hello world`
    }
}
