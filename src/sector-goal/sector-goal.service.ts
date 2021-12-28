import { Injectable } from '@nestjs/common';
import { CreateSectorGoalDto } from './dto/create-sector-goal.dto';
import { UpdateSectorGoalDto } from './dto/update-sector-goal.dto';
import { SectorGoalRepo } from './sector-goal.repository';

@Injectable()
export class SectorGoalService {
  constructor(private readonly sectorGoalRepo: SectorGoalRepo) {}

  async create(createSectorGoalDto: CreateSectorGoalDto) {
    return await this.sectorGoalRepo.create(createSectorGoalDto);
  }

  async findAll() {
    return await this.sectorGoalRepo.findAll();
  }

  async findOne(id: number) {
    return await this.sectorGoalRepo.findOne(id);
  }

  async update(id: number, updateSectorGoalDto: UpdateSectorGoalDto) {
    return await this.sectorGoalRepo.update(id, updateSectorGoalDto);
  }

  async remove(id: number) {
    return await this.sectorGoalRepo.remove(+id);
  }
}
