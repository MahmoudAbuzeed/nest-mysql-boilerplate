import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepo } from './department.repository';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepo: DepartmentRepo) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentRepo.create(createDepartmentDto);
  }

  async findAll() {
    return await this.departmentRepo.findAll();
  }

  async findOne(id: number) {
    return await this.departmentRepo.findOne(id);
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentRepo.update(id, updateDepartmentDto);
  }

  async remove(id: number) {
    return await this.departmentRepo.remove(+id);
  }
}
