import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import PostEntity from './Post';
  
  @Entity('Category')
  class CategoryEntity {
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
  
    @OneToOne(() => PostEntity, post => post.category)
    public post: PostEntity;
  }
  
  export default CategoryEntity;
  