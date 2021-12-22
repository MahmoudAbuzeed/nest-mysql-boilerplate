import { Injectable } from '@nestjs/common';
import { CreateStackHolderDto } from './dto/create-stack-holder.dto';
import { UpdateStackHolderDto } from './dto/update-stack-holder.dto';
import { StackHolderRepo } from './stack-holder.repository';

@Injectable()
export class StackHolderService {
  constructor(private readonly stackHolderRepo: StackHolderRepo) {}

  async create(createStackHolderDto: CreateStackHolderDto) {
    return await this.stackHolderRepo.create(createStackHolderDto);
  }

  async findAll() {
    return await this.stackHolderRepo.findAll();
  }

  async findOne(id: number) {
    return await this.stackHolderRepo.findOne(id);
  }

  async update(id: number, updateStackHolderDto: UpdateStackHolderDto) {
    return await this.stackHolderRepo.update(id, updateStackHolderDto);
  }

  async remove(id: number) {
    return await this.stackHolderRepo.remove(+id);
  }
}
