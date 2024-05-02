import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { User } from '../models/user.model';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UserCreateInput } from '../../user/dto/user.dto';
import { LoginResponse } from '../../auth/dto/login-response';
import { LoginUserInput } from '../../auth/dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signup(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.authService.signup(userCreateInput);
  }
}
