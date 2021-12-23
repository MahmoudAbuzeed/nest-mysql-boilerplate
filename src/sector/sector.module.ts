import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { SectorEntity } from './entities/sector.entity';

import { SectorRepo } from './sector.repository';
@Module({
  imports: [TypeOrmModule.forFeature([SectorEntity])],

  controllers: [SectorController],
  providers: [SectorService, SectorRepo],
})
export class SectorModule {}
