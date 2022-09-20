import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SpecialtyDTO } from './../../services/dto/specialty.dto';
import { SpecialtyRestService } from './../../services/specialty-rest.service';

@Controller('api/specialties')
export class SpecialtyRestController {
  logger = new Logger('SpecialtyRestController');

  constructor(private readonly specialtyRestService: SpecialtyRestService) {}

  @Get("")
  async getAllSpecialties(@Req() req: Request): Promise<SpecialtyDTO[]> {
    var result = await this.specialtyRestService.getAllSpecialties();
    return result;
  }

  @Get(":specialtyId")
  async getSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number): Promise<SpecialtyDTO> {
    var result = await this.specialtyRestService.getSpecialty(specialtyId);
    return result;
  }

  @Post("")
  async addSpecialty(@Req() req: Request, @Body() dto: SpecialtyDTO): Promise<number> {
    var result = await this.specialtyRestService.addSpecialty(dto);
    return result;
  }

  @Put(":specialtyId")
  async updateSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number, @Body() dto: SpecialtyDTO): Promise<void> {
    return await this.specialtyRestService.updateSpecialty(specialtyId, dto);
  }

  @Delete(":specialtyId")
  async deleteSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number): Promise<void> {
    return await this.specialtyRestService.deleteSpecialty(specialtyId);
  }
}