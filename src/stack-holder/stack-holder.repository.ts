import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateStackHolderDto } from './dto/create-stack-holder.dto';
import { UpdateStackHolderDto } from './dto/update-stack-holder.dto';
import { StackHolderEntity } from './entities/stack-holder.entity';

@Injectable()
export class StackHolderRepo {
  constructor(
    @InjectRepository(StackHolderEntity)
    private stackHolderRepo: Repository<StackHolderEntity>,
  ) {}

  async create(createProjectDto: CreateStackHolderDto) {
    return await this.stackHolderRepo.save(createProjectDto);
  }

  async findAll() {
    return await this.stackHolderRepo.find();
  }

  async findOne(id: number) {
    return await this.stackHolderRepo.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateStackHolderDto) {
    return await this.stackHolderRepo.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.stackHolderRepo.delete({ id });
  }
}
