import { Injectable } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ComponentRepo } from './component.repository';

@Injectable()
export class ComponentService {
  constructor(private readonly componentRepo: ComponentRepo) {}

  async create(createComponentDto: CreateComponentDto) {
    return await this.componentRepo.create(createComponentDto);
  }

  async findAll() {
    return await this.componentRepo.findAll();
  }

  async findOne(id: number) {
    return await this.componentRepo.findOne(id);
  }

  async update(id: number, updateComponentDto: UpdateComponentDto) {
    return await this.componentRepo.update(id, updateComponentDto);
  }

  async remove(id: number) {
    return await this.componentRepo.remove(+id);
  }
}
