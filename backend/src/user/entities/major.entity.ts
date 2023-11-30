import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Major {
  @PrimaryGeneratedColumn()
  majorId: number;

  @Column()
  major: string;
}
