import { Injectable } from '@nestjs/common';

import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentRepo } from './attachment.repository';

@Injectable()
export class AttachmentService {
  constructor(private readonly attachmentRepo: AttachmentRepo) {}

  async create(createAttachmentDto: CreateAttachmentDto) {
    return await this.attachmentRepo.create(createAttachmentDto);
  }

  async findAll() {
    return await this.attachmentRepo.findAll();
  }

  async findOne(id: number) {
    return await this.attachmentRepo.findOne(id);
  }

  async update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return await this.attachmentRepo.update(id, updateAttachmentDto);
  }

  async remove(id: number) {
    return await this.attachmentRepo.remove(+id);
  }
}
