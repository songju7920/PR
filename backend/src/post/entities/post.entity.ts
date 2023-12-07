import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  @OneToOne(() => User, (user) => user.userId)
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

  @Column({ default: true })
  isEnd: boolean;
}
