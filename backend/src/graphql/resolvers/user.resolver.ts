import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../../user/user.service';
import { User } from '../models/user.model';
import {
  CreateUserInput,
  UpdateUserInput,
  UserSearchResult,
} from '../models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // Get users
  @Query(() => [User], { name: 'users' })
  getUsers() {
    return this.userService.getUsers();
  }

  // Get user by ID
  @Query(() => User, { name: 'user' })
  async getUserById(@Args('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  // Get followers
  @Query(() => [User], { name: 'followers' })
  async getFollowers(@Args('userId') userId: string) {
    return this.userService.getFollowers(userId);
  }

  // Search users
  @Query(() => [UserSearchResult])
  async searchUsers(@Args('query') query: string): Promise<UserSearchResult[]> {
    return this.userService.searchUsers(query);
  }

  // Create a user
  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserInput) {
    return this.userService.createUser(data);
  }

  // Update a user
  @Mutation(() => User)
  updateUser(
    @Args('userId') userId: string,
    @Args('data') data: UpdateUserInput,
  ) {
    return this.userService.updateUser(userId, data);
  }
}
