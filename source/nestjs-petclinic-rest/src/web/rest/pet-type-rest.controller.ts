import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PetTypeDTO } from './../../services/dto/pet-type.dto';
import { PetTypeRestService } from './../../services/pet-type-rest.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('PetTypeRest')
@Controller('api/pettypes')
export class PetTypeRestController {
  logger = new Logger('PetTypeRestController');

  constructor(private readonly petTypeRestService: PetTypeRestService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: PetTypeDTO,
    isArray: true,
  })
  async getAllPetTypes(@Req() req: Request): Promise<PetTypeDTO[]> {
    const result = await this.petTypeRestService.getAllPetTypes();
    return result;
  }

  @Get(':petTypeId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: PetTypeDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getPetType(@Req() req: Request, @Param('petTypeId') petTypeId: number): Promise<PetTypeDTO> {
    const result = await this.petTypeRestService.getPetType(petTypeId);
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: 'number',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addPetType(@Req() req: Request, @Body() dto: PetTypeDTO): Promise<number> {
    const result = await this.petTypeRestService.addPetType(dto);
    return result;
  }

  @Put(':petTypeId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updatePetType(@Req() req: Request, @Param('petTypeId') petTypeId: number, @Body() dto: PetTypeDTO): Promise<void> {
    return await this.petTypeRestService.updatePetType(petTypeId, dto);
  }

  @Delete(':petTypeId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deletePetType(@Req() req: Request, @Param('petTypeId') petTypeId: number): Promise<void> {
    return await this.petTypeRestService.deletePetType(petTypeId);
  }
}