import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserEntity from './User';
import CommentEntity from './Comment';

@Entity('Post')
class PostEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  description: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(()=> UserEntity, user=>user.posts, {eager: true, onDelete:'CASCADE'})
  public user: UserEntity;

  @OneToMany(()=> CommentEntity, comment=>comment.post)
  public comments: CommentEntity[];
}

export default PostEntity;
