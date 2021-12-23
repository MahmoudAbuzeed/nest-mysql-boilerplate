import { ProjectHistoryEntity } from './project-history/entities/project-history.entity';
import { StackHolderEntity } from './stack-holder/entities/stack-holder.entity';
import { AttachmentEntity } from './attachment/entities/attachment.entity';
import { ComponentEntity } from './component/entities/component.entity';
import { ProjectEntity } from './project/entities/project.entity';
import { TaskEntity } from './task/entities/task.entity';
import { TaskReferenceEntity } from './task-reference/entities/task-reference.entity';
import { SectorEntity } from './sector/entities/sector.entity';

export const entities = [
  ProjectEntity,
  StackHolderEntity,
  AttachmentEntity,
  ProjectHistoryEntity,
  ComponentEntity,
  TaskEntity,
  TaskReferenceEntity,
  SectorEntity,
];
