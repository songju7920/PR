import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  @RelationId((post: Post) => post.user)
  writerId: number;

  @Column()
  creater: string;

  @Column()
  projectTitle: string;

  @Column()
  projectSubtitle: string;

  @Column()
  introduction: string;

  @Column()
  qualifications: string;

  @Column()
  preferentials: string;

  @Column()
  devEnviroment: string;

  @Column()
  stacks: string;

  @Column()
  endAt: string;

  @Column({ default: false })
  isEnd: boolean;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'writerId' })
  user: User;
}
