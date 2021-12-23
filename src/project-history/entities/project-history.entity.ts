import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProjectHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  from_status: string;

  @Column({ length: 40 })
  to_status: string;

  @Column({ length: 40 })
  message: string;

  @Column({ length: 40 })
  editor_id: string;

  @Column()
  department_type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
