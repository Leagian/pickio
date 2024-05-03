import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthResolver } from '../graphql/resolvers/auth.resolver';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt-refresh-token.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '15m' }, // token d'accès
      secret: process.env.JWT_SECRET,
    }),
    JwtModule.register({
      signOptions: { expiresIn: '60d' }, // token de rafraîchissement
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    }),
  ],
  providers: [
    AuthService,
    PrismaService,
    AuthResolver,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshTokenStrategy,
  ],
})
export class AuthModule {}
