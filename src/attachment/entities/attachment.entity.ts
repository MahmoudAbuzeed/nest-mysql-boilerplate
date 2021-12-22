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
export class AttachmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  avatar_fd: string;

  @Column()
  size: number;

  @Column({ length: 40 })
  storage_type: string;

  @Column()
  pages: number;

  @Column()
  is_reviewed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => ProjectEntity, (project) => project.attachments)
  project: ProjectEntity;
}
