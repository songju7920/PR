import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  PostId: number;

  @Column()
  @OneToOne(() => User, (user) => user.userId)
  writerId: number;

  @Column()
  creater: string;

  @Column()
  projectTitle: string;

  @Column()
  projectSubTitle: string;

  @Column()
  introduction: string;

  @Column()
  qualifications: string;

  @Column()
  preferentials: string;

  @Column()
  developmentEnviroment: string;

  @Column()
  skills: string;

  @Column()
  endAt: string;
}
