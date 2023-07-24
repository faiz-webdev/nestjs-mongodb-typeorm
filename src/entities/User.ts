import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import PostEntity from './Post';
import CommentEntity from './Comment';

@Entity('User')
class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @PrimaryColumn()
  @Column({
    unique: true,
    nullable: true,
  })
  email: string;

  @Column()
  phone: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(()=>PostEntity, post=>post.user)
  public posts: PostEntity[];

  @OneToMany(()=>CommentEntity, comment=>comment.user)
  public comments: CommentEntity[];
}

export default UserEntity;
