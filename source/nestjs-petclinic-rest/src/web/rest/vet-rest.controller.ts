import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VetDTO } from './../../services/dto/vet.dto';
import { VetCreateDTO } from './../../services/dto/vet-create.dto';
import { VetUpdateDTO } from './../../services/dto/vet-update.dto';
import { VetRestService } from './../../services/vet-rest.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('VetRest')
@Controller('api/vets')
export class VetRestController {
  logger = new Logger('VetRestController');

  constructor(private readonly vetRestService: VetRestService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: VetDTO,
    isArray: true,
  })
  async getAllVets(@Req() req: Request): Promise<VetDTO[]> {
    const result = await this.vetRestService.getAllVets();
    return result;
  }

  @Get(':vetId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: VetDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getVet(@Req() req: Request, @Param('vetId') vetId: number): Promise<VetDTO> {
    const result = await this.vetRestService.getVet(vetId);
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addVet(@Req() req: Request, @Body() dto: VetCreateDTO): Promise<void> {
    return await this.vetRestService.addVet(dto);
  }

  @Put(':vetId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updateVet(@Req() req: Request, @Param('vetId') vetId: number, @Body() dto: VetUpdateDTO): Promise<void> {
    return await this.vetRestService.updateVet(vetId, dto);
  }

  @Delete(':vetId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deleteVet(@Req() req: Request, @Param('vetId') vetId: number): Promise<void> {
    return await this.vetRestService.deleteVet(vetId);
  }
}