import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SpecialtyDTO } from './../../services/dto/specialty.dto';
import { SpecialtyRestService } from './../../services/specialty-rest.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('SpecialtyRest')
@Controller('api/specialties')
export class SpecialtyRestController {
  logger = new Logger('SpecialtyRestController');

  constructor(private readonly specialtyRestService: SpecialtyRestService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: SpecialtyDTO,
    isArray: true,
  })
  async getAllSpecialties(@Req() req: Request): Promise<SpecialtyDTO[]> {
    const result = await this.specialtyRestService.getAllSpecialties();
    return result;
  }

  @Get(':specialtyId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: SpecialtyDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number): Promise<SpecialtyDTO> {
    const result = await this.specialtyRestService.getSpecialty(specialtyId);
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: 'number',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addSpecialty(@Req() req: Request, @Body() dto: SpecialtyDTO): Promise<number> {
    const result = await this.specialtyRestService.addSpecialty(dto);
    return result;
  }

  @Put(':specialtyId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updateSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number, @Body() dto: SpecialtyDTO): Promise<void> {
    return await this.specialtyRestService.updateSpecialty(specialtyId, dto);
  }

  @Delete(':specialtyId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deleteSpecialty(@Req() req: Request, @Param('specialtyId') specialtyId: number): Promise<void> {
    return await this.specialtyRestService.deleteSpecialty(specialtyId);
  }
}