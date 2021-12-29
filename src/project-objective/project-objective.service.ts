import { Injectable } from '@nestjs/common';
import { CreateProjectObjectiveDto } from './dto/create-project-objective.dto';
import { UpdateProjectObjectiveDto } from './dto/update-project-objective.dto';
import { ProjectObjectiveRepo } from './project-objective.repository';

@Injectable()
export class ProjectObjectiveService {
  constructor(private readonly projectObjectiveRepo: ProjectObjectiveRepo) {}

  async create(createProjectObjectiveDto: CreateProjectObjectiveDto) {
    return await this.projectObjectiveRepo.create(createProjectObjectiveDto);
  }

  async findAll() {
    return await this.projectObjectiveRepo.findAll();
  }

  async findOne(id: number) {
    return await this.projectObjectiveRepo.findOne(id);
  }

  async update(
    id: number,
    updateProjectObjectiveDto: UpdateProjectObjectiveDto,
  ) {
    return await this.projectObjectiveRepo.update(
      id,
      updateProjectObjectiveDto,
    );
  }

  async remove(id: number) {
    return await this.projectObjectiveRepo.remove(+id);
  }
}
