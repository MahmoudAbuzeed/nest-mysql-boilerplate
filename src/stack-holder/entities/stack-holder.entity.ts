import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProjectEntity } from 'src/project/entities/project.entity';

@Entity()
export class StackHolderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  title: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 20 })
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => ProjectEntity, (project) => project.stackHolders)
  project: ProjectEntity;
}
