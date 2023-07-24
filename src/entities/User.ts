import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import PostEntity from './Post';
import CommentEntity from './Comment';
import { IsNotEmpty, Length } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity('User')
@Unique(['username'])
class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({nullable: true})
  name: string;

//   @PrimaryColumn()
//   @Column({
//     unique: true,
//     nullable: true,
//   })
//   email: string;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  public username: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  public password: string;

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

  public hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}

export default UserEntity;
