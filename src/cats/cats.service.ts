import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UpdateCatDto } from './dto/update-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatEntity } from './entities/cat.entity';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catsRepository: Repository<CatEntity>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    return await this.catsRepository.create(createCatDto);
  }
  async findAll() {
    return await this.catsRepository.find();
  }
  async findOne(id: number) {
    return await this.catsRepository.findOne(id);
  }
  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catsRepository.update(id, updateCatDto);
  }

  async destroy(id: number) {
    await this.catsRepository.delete({ id });
    return { deleted: true };
  }
}
