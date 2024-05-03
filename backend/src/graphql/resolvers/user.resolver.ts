import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../../user/user.service';
import { User, UserSearchResult } from '../models/user.model';
import { UserFollows } from '../models/userFollow.model';
import { UserCreateInput, UserUpdateInput } from '../../user/dto/user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

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
  @Mutation(() => UserFollows, { name: 'followUser' })
  async followUser(
    @Args('followerId') followerId: string,
    @Args('followingId') followingId: string,
  ) {
    return this.userService.followUser(followerId, followingId);
  }

  //* GET *//

  // Get users
  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.userService.getUsers();
  }

  // Get user by ID
  @Query(() => User, { name: 'userById' })
  @UseGuards(JwtAuthGuard)
  async getUserById(@Args('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  // Get user by username
  @Query(() => User, { name: 'userByUsername' })
  async user(@Args('username') username: string) {
    return this.userService.getUserByUsername(username);
  }

  // Get followers
  @Query(() => [User], { name: 'followers' })
  async followers(@Args('userId') userId: string) {
    return this.userService.getFollowers(userId);
  }

  // Get followings
  @Query(() => [User], { name: 'followings' })
  async followings(@Args('userId') userId: string) {
    return this.userService.getFollowings(userId);
  }

  // Get followers count
  @Query(() => Number)
  async getFollowersCount(
    @Args('userId', { type: () => String }) userId: string,
  ) {
    return this.userService.getFollowersCount(userId);
  }

  // Get followings count
  @Query(() => Number)
  async getFollowingsCount(
    @Args('userId', { type: () => String }) userId: string,
  ) {
    return this.userService.getFollowingsCount(userId);
  }

  // Search users
  @Query(() => [UserSearchResult], { name: 'searchUsers' })
  async searchUsers(@Args('query') query: string): Promise<UserSearchResult[]> {
    return this.userService.searchUsers(query);
  }

  //* UPDATE *//

  // Update a user
  @Mutation(() => User, { name: 'updateUser' })
  updateUser(
    @Args('userId') userId: string,
    @Args('data') data: UserUpdateInput,
  ) {
    return this.userService.updateUser(userId, data);
  }

  //* DELETE *//

  // Delete a user
  @Mutation(() => User, { name: 'deleteUser' })
  async deleteUser(@Args('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
