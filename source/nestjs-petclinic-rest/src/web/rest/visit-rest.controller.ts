import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VisitDTO } from './../../services/dto/visit.dto';
import { VisitCreateDTO } from './../../services/dto/visit-create.dto';
import { VisitUpdateDTO } from './../../services/dto/visit-update.dto';
import { VisitRestService } from './../../services/visit-rest.service';

@Controller('api/visits')
export class VisitRestController {
  logger = new Logger('VisitRestController');

  constructor(private readonly visitRestService: VisitRestService) {}

  @Get(":visitId")
  async getVisit(@Req() req: Request, @Param('visitId') visitId: number): Promise<VisitDTO> {
    var result = await this.visitRestService.getVisit(visitId);
    return result;
  }

  @Post("")
  async addVisit(@Req() req: Request, @Body() dto: VisitCreateDTO): Promise<void> {
    return await this.visitRestService.addVisit(dto);
  }

  @Put(":visitId")
  async updateVisit(@Req() req: Request, @Param('visitId') visitId: number, @Body() dto: VisitUpdateDTO): Promise<void> {
    return await this.visitRestService.updateVisit(visitId, dto);
  }

  @Delete(":visitId")
  async deleteVisit(@Req() req: Request, @Param('visitId') visitId: number): Promise<void> {
    return await this.visitRestService.deleteVisit(visitId);
  }
}