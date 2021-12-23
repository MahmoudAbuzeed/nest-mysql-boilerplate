import { Injectable } from '@nestjs/common';
import { CreateProjectHistoryDto } from './dto/create-project-history.dto';
import { UpdateProjectHistoryDto } from './dto/update-project-history.dto';
import { ProjectHistoryRepo } from './project-history.repository';

@Injectable()
export class ProjectHistoryService {
  constructor(private readonly projectHistoryRepo: ProjectHistoryRepo) {}

  async create(createProjectHistoryDto: CreateProjectHistoryDto) {
    return await this.projectHistoryRepo.create(createProjectHistoryDto);
  }

  async findAll() {
    return await this.projectHistoryRepo.findAll();
  }

  async findOne(id: number) {
    return await this.projectHistoryRepo.findOne(id);
  }

  async update(id: number, updateProjectHistoryDto: UpdateProjectHistoryDto) {
    return await this.projectHistoryRepo.update(id, updateProjectHistoryDto);
  }

  async remove(id: number) {
    return await this.projectHistoryRepo.remove(+id);
  }
}
