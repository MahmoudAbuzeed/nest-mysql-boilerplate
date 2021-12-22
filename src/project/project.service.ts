import { Injectable } from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepo } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepo: ProjectRepo) {}

  async create(createProjectDto: CreateProjectDto) {
    return await this.projectRepo.create(createProjectDto);
  }

  async findAll() {
    return await this.projectRepo.findAll();
  }

  async findOne(id: number) {
    return await this.projectRepo.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectRepo.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.projectRepo.remove(+id);
  }
}
