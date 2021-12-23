import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ComponentEntity } from './entities/component.entity';

@Injectable()
export class ComponentRepo {
  constructor(
    @InjectRepository(ComponentEntity)
    private componentEntity: Repository<ComponentEntity>,
  ) {}

  async create(createComponentDto: CreateComponentDto) {
    return await this.componentEntity.save(createComponentDto);
  }

  async findAll() {
    return await this.componentEntity.find();
  }

  async findOne(id: number) {
    return await this.componentEntity.findOne(id);
  }

  async update(id: number, updateComponentDto: UpdateComponentDto) {
    return await this.componentEntity.update(id, updateComponentDto);
  }

  async remove(id: number) {
    return await this.componentEntity.delete({ id });
  }
}
