import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import PostEntity from './Post';

@Entity('Tag')
class TagEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  tag: string;

  @Column()
  url: string;

  @Column()
  text: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(() => PostEntity, post => post.tags, { eager: true, onDelete: 'CASCADE' })
  public post: PostEntity;
}

export default TagEntity;
