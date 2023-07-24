import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import UserEntity from './entities/User';
import CommentEntity from './entities/Comment';
import PostEntity from './entities/Post';
import TagEntity from './entities/Tag';
import CategoryEntity from './entities/Category';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [UserEntity, CommentEntity, PostEntity, TagEntity, CategoryEntity],
    }),
    AuthModule, PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
