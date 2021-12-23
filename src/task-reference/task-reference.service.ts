import { Injectable } from '@nestjs/common';
import { CreateTaskReferenceDto } from './dto/create-task-reference.dto';
import { UpdateTaskReferenceDto } from './dto/update-task-reference.dto';
import { TaskReferenceRepo } from './task-reference.repository';

@Injectable()
export class TaskReferenceService {
  constructor(private readonly taskReferenceRepo: TaskReferenceRepo) {}

  async create(createTaskReferenceDto: CreateTaskReferenceDto) {
    return await this.taskReferenceRepo.create(createTaskReferenceDto);
  }

  async findAll() {
    return await this.taskReferenceRepo.findAll();
  }

  async findOne(id: number) {
    return await this.taskReferenceRepo.findOne(id);
  }

  async update(id: number, updateTaskReferenceDto: UpdateTaskReferenceDto) {
    return await this.taskReferenceRepo.update(id, updateTaskReferenceDto);
  }

  async remove(id: number) {
    return await this.taskReferenceRepo.remove(+id);
  }
}
