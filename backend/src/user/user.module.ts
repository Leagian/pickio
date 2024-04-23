// user.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from './user.service';
import { UserResolver } from '../graphql/resolvers/user.resolver';

@Module({
  providers: [UserService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
