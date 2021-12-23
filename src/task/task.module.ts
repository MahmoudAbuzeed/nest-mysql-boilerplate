import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskEntity } from './entities/task.entity';

import { TaskRepo } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],

  controllers: [TaskController],
  providers: [TaskService, TaskRepo],
})
export class TaskModule {}
