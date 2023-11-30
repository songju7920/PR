import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Major } from './major.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @OneToOne(() => Major, (major) => major.majorId)
  major: number;

  @Column()
  skills: string;

  @Column()
  mail: string;

  @Column()
  tel: string;
}
