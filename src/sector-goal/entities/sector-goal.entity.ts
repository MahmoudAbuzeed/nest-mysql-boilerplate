import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { SectorPlanEntity } from 'src/sector-plan/entities/sector-plan.entity';

@Entity()
export class SectorGoalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  pillars: string;

  @Column()
  description: string;

  @Column({ length: 40 })
  type: string;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => SectorPlanEntity)
  sectorPlan: SectorPlanEntity;
}