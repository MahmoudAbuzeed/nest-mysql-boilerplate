import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ProjectEntity } from 'src/project/entities/project.entity';
import { TaskEntity } from 'src/task/entities/task.entity';
import { SectorEntity } from 'src/sector/entities/sector.entity';

@Entity()
export class ComponentEntity {
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

  @ManyToOne(() => ProjectEntity, (project) => project.components)
  project: ProjectEntity;

  @OneToMany(() => TaskEntity, (task) => task.component)
  tasks: TaskEntity[];

  @ManyToMany(() => SectorEntity)
  @JoinTable()
  sectors: SectorEntity[];
}
