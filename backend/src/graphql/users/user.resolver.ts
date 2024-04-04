import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from '../../user/user.service';
import { User } from './user.entities';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User, { name: 'user' })
  async getUserById(@Args('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Query(() => [User], { name: 'followers' })
  async getFollowers(@Args('userId') userId: string) {
    return this.userService.getFollowers(userId);
  }
}
