import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepo } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepo: RoleRepo) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepo.create(createRoleDto);
  }

  async findAll() {
    return await this.roleRepo.findAll();
  }

  async findOne(id: number) {
    return await this.roleRepo.findOne(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepo.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.roleRepo.remove(+id);
  }
}
