import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SectorGoalService } from './sector-goal.service';
import { SectorGoalController } from './sector-goal.controller';
import { SectorGoalEntity } from './entities/sector-goal.entity';

import { SectorGoalRepo } from './sector-goal.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SectorGoalEntity])],

  controllers: [SectorGoalController],
  providers: [SectorGoalService, SectorGoalRepo],
})
export class SectorGoalModule {}
