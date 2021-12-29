import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { Component } from './entities/component.entity';
import { ComponentRepo } from './component.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Component])],

  controllers: [ComponentController],
  providers: [ComponentService, ComponentRepo],
})
export class ComponentModule {}
