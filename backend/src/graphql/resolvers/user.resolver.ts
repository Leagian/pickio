import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../../user/user.service';
import {
  User,
  UserCreateInput,
  UserUpdateInput,
  UserSearchResult,
} from '../models/user.model';
import { UserFollows } from '../models/userFollow.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  //* CREATE *//

  // Create a user
  @Mutation(() => User)
  createUser(@Args('data') data: UserCreateInput) {
    return this.userService.createUser(data);
  }

  // Create a follow user
  @Mutation(() => UserFollows)
  async followUser(
    @Args('followerId') followerId: string,
    @Args('followingId') followingId: string,
  ) {
    return this.userService.followUser(followerId, followingId);
  }

  //* GET *//

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

  // Get user by username
  @Query(() => User, { nullable: true })
  async user(@Args('username') username: string) {
    return this.userService.getUserByUsername(username);
  }

  // Get followers
  @Query(() => [User])
  async followers(@Args('userId') userId: string) {
    return this.userService.getFollowers(userId);
  }

  // Get followings
  @Query(() => [User])
  async followings(@Args('userId') userId: string) {
    return this.userService.getFollowings(userId);
  }

  // Search users
  @Query(() => [UserSearchResult])
  async searchUsers(@Args('query') query: string): Promise<UserSearchResult[]> {
    return this.userService.searchUsers(query);
  }

  //* UPDATE *//

  // Update a user
  @Mutation(() => User)
  updateUser(
    @Args('userId') userId: string,
    @Args('data') data: UserUpdateInput,
  ) {
    return this.userService.updateUser(userId, data);
  }

  //* DELETE *//

  // Delete a user
  @Mutation(() => User)
  async deleteUser(@Args('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }

  //* LOGIN LOGOUT *//

  // Post login
  // @Mutation(() => User)
  // async login(
  //   @Args('username') username: string,
  //   @Args('password') password: string,
  // ) {
  //   return this.userService.login(username, password);
  // }

  // Post logout
  // @Mutation(() => Boolean)
  // async logout(@Args('userId') userId: string) {
  //   return this.userService.logout(userId);
  // }
}
