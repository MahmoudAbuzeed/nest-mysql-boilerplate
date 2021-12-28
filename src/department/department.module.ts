import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentEntity } from './entities/department.entity';
import { DepartmentRepo } from './department.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepo],
})
export class DepartmentModule {}
