import { ProjectHistoryEntity } from './project-history/entities/project-history.entity';
import { StackHolderEntity } from './stack-holder/entities/stack-holder.entity';
import { AttachmentEntity } from './attachment/entities/attachment.entity';
import { ComponentEntity } from './component/entities/component.entity';
import { ProjectEntity } from './project/entities/project.entity';
import { TaskEntity } from './task/entities/task.entity';
import { TaskReferenceEntity } from './task-reference/entities/task-reference.entity';
import { SectorEntity } from './sector/entities/sector.entity';
import { SectorPlanEntity } from './sector-plan/entities/sector-plan.entity';
import { SectorGoalEntity } from './sector-goal/entities/sector-goal.entity';
import { UserEntity } from './user/entities/user.entity';
import { RoleEntity } from './role/entities/role.entity';

export const entities = [
  ProjectEntity,
  StackHolderEntity,
  AttachmentEntity,
  ProjectHistoryEntity,
  ComponentEntity,
  TaskEntity,
  TaskReferenceEntity,
  SectorEntity,
  SectorPlanEntity,
  SectorGoalEntity,
  UserEntity,
  RoleEntity,
];
