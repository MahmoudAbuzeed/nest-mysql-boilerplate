import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectorPlanService } from './sector-plan.service';
import { CreateSectorPlanDto } from './dto/create-sector-plan.dto';
import { UpdateSectorPlanDto } from './dto/update-sector-plan.dto';

@Controller('sector-plan')
export class SectorPlanController {
  constructor(private readonly sectorPlanService: SectorPlanService) {}

  @Post()
  create(@Body() createSectorPlanDto: CreateSectorPlanDto) {
    return this.sectorPlanService.create(createSectorPlanDto);
  }

  @Get()
  findAll() {
    return this.sectorPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorPlanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSectorPlanDto: UpdateSectorPlanDto,
  ) {
    return this.sectorPlanService.update(+id, updateSectorPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectorPlanService.remove(+id);
  }
}