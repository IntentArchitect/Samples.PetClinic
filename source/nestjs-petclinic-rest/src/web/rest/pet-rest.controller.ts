import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PetDTO } from './../../services/dto/pet.dto';
import { PetCreateDTO } from './../../services/dto/pet-create.dto';
import { PetUpdateDTO } from './../../services/dto/pet-update.dto';
import { PetRestService } from './../../services/pet-rest.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('PetRest')
@Controller('api/pets')
export class PetRestController {
  logger = new Logger('PetRestController');

  constructor(private readonly petRestService: PetRestService) {}

  @Get(':petId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: PetDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getPet(@Req() req: Request, @Param('petId') petId: number): Promise<PetDTO> {
    const result = await this.petRestService.getPet(petId);
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addPet(@Req() req: Request, @Body() dto: PetCreateDTO): Promise<void> {
    return await this.petRestService.addPet(dto);
  }

  @Put(':petId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updatePet(@Req() req: Request, @Param('petId') petId: number, @Body() dto: PetUpdateDTO): Promise<void> {
    return await this.petRestService.updatePet(petId, dto);
  }

  @Delete(':petId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deletePet(@Req() req: Request, @Param('petId') petId: number): Promise<void> {
    return await this.petRestService.deletePet(petId);
  }
}