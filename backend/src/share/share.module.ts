import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ShareService } from './share.service';
import { ShareResolver } from '../graphql/resolvers/share.resolver';

@Module({
  providers: [ShareService, PrismaService, ShareResolver],
})
export class ShareModule {}
