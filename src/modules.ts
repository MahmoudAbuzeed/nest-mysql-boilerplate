import { ProjectHistoryModule } from './project-history/project-history.module';
import { StackHolderModule } from './stack-holder/stack-holder.module';
import { AttachmentModule } from './attachment/attachment.module';
import { ComponentModule } from './component/component.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

export const modules = [
  ProjectModule,
  StackHolderModule,
  AttachmentModule,
  ProjectHistoryModule,
  ComponentModule,
  TaskModule,
];
