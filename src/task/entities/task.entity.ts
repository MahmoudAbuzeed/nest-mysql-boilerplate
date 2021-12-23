import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ComponentEntity } from 'src/component/entities/component.entity';
import { TaskReferenceEntity } from 'src/task-reference/entities/task-reference.entity';

@Entity()
export class TaskEntity {
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

  @Column()
  description: string;

  @Column()
  approval_requirements: string;

  @Column()
  priority: string;

  @Column()
  man_power: number;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column()
  weight: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => ComponentEntity, (component) => component.tasks)
  component: ComponentEntity;

  @OneToMany(() => TaskReferenceEntity, (taskReference) => taskReference.task)
  taskReferences: TaskReferenceEntity[];
}
