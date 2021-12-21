import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  reference_id: string;

  @Column()
  budget: number;

  @Column({ length: 40 })
  type: string;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @Column()
  description: string;

  //   @Column({ default: true })
  //   isAvailable: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
