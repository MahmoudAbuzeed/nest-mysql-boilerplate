import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { TaskEntity } from 'src/task/entities/task.entity';

@Entity()
export class TaskReferenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parent_id: number;

  @Column()
  child_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => TaskEntity, (task) => task.taskReferences)
  task: TaskEntity[];
}
