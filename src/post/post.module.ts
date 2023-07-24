import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PostEntity from 'src/entities/Post';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [],
  providers: [],
})
export class PostModule {}
