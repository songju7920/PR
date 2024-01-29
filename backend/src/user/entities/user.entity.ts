import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
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
  @RelationId((user: User) => user.major)
  majorId: number;

  @Column()
  skills: string;

  @Column()
  mail: string;

  @Column()
  tel: string;

  @ManyToOne(() => Major, (major) => major.majorId)
  @JoinColumn({ name: 'majorId' })
  major: Major;
}
