import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}

export default CommentEntity;
