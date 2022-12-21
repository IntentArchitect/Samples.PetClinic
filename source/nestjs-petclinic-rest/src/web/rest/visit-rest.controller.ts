import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VisitDTO } from './../../services/dto/visit.dto';
import { VisitCreateDTO } from './../../services/dto/visit-create.dto';
import { VisitUpdateDTO } from './../../services/dto/visit-update.dto';
import { VisitRestService } from './../../services/visit-rest.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('VisitRest')
@Controller('api/visits')
export class VisitRestController {
  logger = new Logger('VisitRestController');

  constructor(private readonly visitRestService: VisitRestService) {}

  @Get(':visitId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: VisitDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getVisit(@Req() req: Request, @Param('visitId') visitId: number): Promise<VisitDTO> {
    const result = await this.visitRestService.getVisit(visitId);
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addVisit(@Req() req: Request, @Body() dto: VisitCreateDTO): Promise<void> {
    return await this.visitRestService.addVisit(dto);
  }

  @Put(':visitId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updateVisit(@Req() req: Request, @Param('visitId') visitId: number, @Body() dto: VisitUpdateDTO): Promise<void> {
    return await this.visitRestService.updateVisit(visitId, dto);
  }

  @Delete(':visitId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deleteVisit(@Req() req: Request, @Param('visitId') visitId: number): Promise<void> {
    return await this.visitRestService.deleteVisit(visitId);
  }
}