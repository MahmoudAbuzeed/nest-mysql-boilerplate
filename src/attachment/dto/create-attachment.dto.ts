import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Project } from 'src/project/entities/project.entity';

export class CreateAttachmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  avatar_fd: string;

  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsString()
  @IsNotEmpty()
  storage_type: string;

  @IsNumber()
  @IsNotEmpty()
  pages: number;

  @IsBoolean()
  @IsNotEmpty()
  is_reviewed: boolean;

  @IsNumber()
  @IsNotEmpty()
  project: Project;
}
