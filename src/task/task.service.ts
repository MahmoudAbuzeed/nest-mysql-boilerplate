import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepo } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepo: TaskRepo) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepo.create(createTaskDto);
  }

  async findAll() {
    return await this.taskRepo.findAll();
  }

  async findOne(id: number) {
    return await this.taskRepo.findOne(id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepo.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.taskRepo.remove(+id);
  }
}
