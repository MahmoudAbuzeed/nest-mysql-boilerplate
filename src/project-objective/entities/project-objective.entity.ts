import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProjectEntity } from 'src/project/entities/project.entity';

@Entity()
export class ProjectObjective {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goal: string;

  @ManyToOne(() => ProjectEntity)
  project: ProjectEntity;
}
