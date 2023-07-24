import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserEntity from './User';
import PostEntity from './Post';

@Entity('Comment')
class CommentEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  comment: string;

  @Column()
  description: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(()=>UserEntity, user=>user.comments, {eager: true, onDelete:'CASCADE'})
  public user: UserEntity;

  @ManyToOne(()=>PostEntity, post=>post.comments, {eager: true, onDelete:'CASCADE'})
  public post: PostEntity;
}

export default CommentEntity;
