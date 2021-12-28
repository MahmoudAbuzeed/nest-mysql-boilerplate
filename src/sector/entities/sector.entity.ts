import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ComponentEntity } from 'src/component/entities/component.entity';

@Entity()
export class SectorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToMany(() => ComponentEntity, (component) => component.sectors)
  // @JoinTable()
  // components: ComponentEntity[];
}
