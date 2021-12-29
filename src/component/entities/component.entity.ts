import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Sector } from 'src/sector/entities/sector.entity';

@Entity()
export class Component {
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

  @ManyToOne(() => Project)
  project: Project;

  @ManyToMany(() => Sector)
  @JoinTable()
  sectors: Sector[];
}
