import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class ProjectRepo {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    return await this.projectRepository.save(createProjectDto);
  }

  async findAll() {
    return await this.projectRepository.find();
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.projectRepository.delete({ id });
  }
}
