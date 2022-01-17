import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString({ message: 'must be string' }) // override the default message
  @IsNotEmpty({ message: 'must  not be string' })
  name: string;
}
