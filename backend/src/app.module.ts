import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ShareModule } from './share/share.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    ShareModule,
    BookmarkModule,
    TestModule,
  ],
})
export class AppModule {}
