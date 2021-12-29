import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Department } from 'src/department/entities/department.entity';

export class CreateProjectDto {
  @IsString({ message: 'must be string' }) // override the default message
  @IsNotEmpty({ message: 'must  not be string' })
  name: string;

  @IsString()
  @IsNotEmpty()
  reference_id: string;

  @IsNumber()
  @IsNotEmpty()
  budget: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsDateString()
  @IsNotEmpty()
  end_date: Date;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  department: Department;
}
