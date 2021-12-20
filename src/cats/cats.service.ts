import { Injectable } from '@nestjs/common';
import catsRepository from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  async create(createCatDto: CreateCatDto) {
    return await catsRepository.create(CreateCatDto);
  }

  async findAll() {
    return await catsRepository.findAll();
  }
  async findOne(id: number) {
    return await catsRepository.findOne(id);
  }
  async update(id: number, updateCatDto: UpdateCatDto) {
    return await catsRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await catsRepository.remove(id);
  }
}
