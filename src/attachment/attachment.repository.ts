import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';

import { AttachmentEntity } from './entities/attachment.entity';

@Injectable()
export class AttachmentRepo {
  constructor(
    @InjectRepository(AttachmentEntity)
    private attachmentRepository: Repository<AttachmentEntity>,
  ) {}

  async create(createProjectDto: CreateAttachmentDto) {
    return await this.attachmentRepository.save(createProjectDto);
  }

  async findAll() {
    return await this.attachmentRepository.find();
  }

  async findOne(id: number) {
    return await this.attachmentRepository.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateAttachmentDto) {
    return await this.attachmentRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.attachmentRepository.delete({ id });
  }
}
