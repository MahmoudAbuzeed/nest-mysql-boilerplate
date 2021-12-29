import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { Component } from './entities/component.entity';

@Injectable()
export class ComponentRepo {
  constructor(
    @InjectRepository(Component)
    private component: Repository<Component>,
  ) {}

  async create(createComponentDto: CreateComponentDto) {
    return await this.component.save(createComponentDto);
  }

  async findAll() {
    return await this.component.find();
  }

  async findOne(id: number) {
    return await this.component.findOne(id);
  }

  async update(id: number, updateComponentDto: UpdateComponentDto) {
    return await this.component.update(id, updateComponentDto);
  }

  async remove(id: number) {
    return await this.component.delete({ id });
  }
}
