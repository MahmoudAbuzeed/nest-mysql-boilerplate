import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.create(createUserDto);
  }

  async findAll() {
    return await this.userRepo.findAll();
  }

  async findOne(id: number) {
    return await this.userRepo.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepo.remove(+id);
  }
}
