import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { StackHolderEntity } from 'src/stack-holder/entities/stack-holder.entity';
import { AttachmentEntity } from 'src/attachment/entities/attachment.entity';

@Entity()
export class ProjectEntity {
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

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column()
  description: string;

  //   @Column({ default: true })
  //   isAvailable: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => StackHolderEntity, (stackHolder) => stackHolder.project)
  stackHolders: StackHolderEntity[];

  @OneToMany(() => AttachmentEntity, (attachment) => attachment.project)
  attachments: AttachmentEntity[];
}
