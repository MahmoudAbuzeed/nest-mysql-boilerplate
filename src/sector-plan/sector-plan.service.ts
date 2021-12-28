import { Injectable } from '@nestjs/common';
import { CreateSectorPlanDto } from './dto/create-sector-plan.dto';
import { UpdateSectorPlanDto } from './dto/update-sector-plan.dto';
import { SectorPlanRepo } from './sector-plan.repository';

@Injectable()
export class SectorPlanService {
  constructor(private readonly sectorPlanRepo: SectorPlanRepo) {}

  async create(createSectorPlanDto: CreateSectorPlanDto) {
    return await this.sectorPlanRepo.create(createSectorPlanDto);
  }

  async findAll() {
    return await this.sectorPlanRepo.findAll();
  }

  async findOne(id: number) {
    return await this.sectorPlanRepo.findOne(id);
  }

  async update(id: number, updateSectorPlanDto: UpdateSectorPlanDto) {
    return await this.sectorPlanRepo.update(id, updateSectorPlanDto);
  }

  async remove(id: number) {
    return await this.sectorPlanRepo.remove(+id);
  }
}
