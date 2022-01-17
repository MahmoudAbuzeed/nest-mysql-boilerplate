import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;
}
