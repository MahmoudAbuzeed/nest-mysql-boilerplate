import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { ComponentEntity } from './entities/component.entity';

import { ComponentRepo } from './component.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentEntity])],

  controllers: [ComponentController],
  providers: [ComponentService, ComponentRepo],
})
export class ComponentModule {}
