import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { SectorRepo } from './sector.repository';

@Injectable()
export class SectorService {
  constructor(private readonly sectorRepo: SectorRepo) {}

  async create(createSectorDto: CreateSectorDto) {
    return await this.sectorRepo.create(createSectorDto);
  }

  async findAll() {
    return await this.sectorRepo.findAll();
  }

  async findOne(id: number) {
    return await this.sectorRepo.findOne(id);
  }

  async update(id: number, updateSectorDto: UpdateSectorDto) {
    return await this.sectorRepo.update(id, updateSectorDto);
  }

  async remove(id: number) {
    return await this.sectorRepo.remove(+id);
  }
}
