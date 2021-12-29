import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Attachment } from './entities/attachment.entity';

@Injectable()
export class AttachmentRepo {
  constructor(
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
  ) {}

  async create(createAttachmentDto: Partial<Attachment>) {
    console.log(createAttachmentDto.project);
    console.log(typeof createAttachmentDto.project);
    return await this.attachmentRepository.save(createAttachmentDto);
  }

  async findAll() {
    return await this.attachmentRepository.find();
  }

  async findOne(id: number) {
    return await this.attachmentRepository.findOne(id);
  }

  async update(id: number, updateAttachmentDto: Partial<Attachment>) {
    return await this.attachmentRepository.update(id, updateAttachmentDto);
  }

  async remove(id: number) {
    return await this.attachmentRepository.delete({ id });
  }
}
