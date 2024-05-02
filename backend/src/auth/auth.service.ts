import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from '../user/user.service';
import { User } from '../graphql/models/user.model';
import { JwtService } from '@nestjs/jwt';
import { UserCreateInput } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  // Validate user
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      delete user.password;
      return user;
    }
    return null;
  }

  // Login
  async login(user: User) {
    const payload = { username: user.username, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }

  // Signup
  async signup(userCreateInput: UserCreateInput) {
    const user = await this.userService.getUserByUsername(
      userCreateInput.username,
    );

    if (user) {
      throw new Error('User already exists');
    }

    const password = await bcrypt.hash(userCreateInput.password, 10);

    return this.userService.createUser({
      ...userCreateInput,
      password,
    });
  }
}
