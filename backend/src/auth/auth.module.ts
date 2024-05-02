import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthResolver } from '../graphql/resolvers/auth.resolver';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '60s' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [
    AuthService,
    PrismaService,
    AuthResolver,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
