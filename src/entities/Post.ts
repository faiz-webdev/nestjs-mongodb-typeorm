import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserEntity from './User';
import CommentEntity from './Comment';
import CategoryEntity from './Category';
import TagEntity from './Tag';

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

  @OneToOne(() => CategoryEntity, category => category.post)
  public category: CategoryEntity;

  @OneToMany(() => TagEntity, tag => tag.post)
  public tags: TagEntity[];
}

export default PostEntity;
