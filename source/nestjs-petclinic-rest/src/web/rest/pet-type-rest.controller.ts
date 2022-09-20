import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PetTypeDTO } from './../../services/dto/pet-type.dto';
import { PetTypeRestService } from './../../services/pet-type-rest.service';

@Controller('api/pettypes')
export class PetTypeRestController {
  logger = new Logger('PetTypeRestController');

  constructor(private readonly petTypeRestService: PetTypeRestService) {}

  @Get("")
  async getAllPetTypes(@Req() req: Request): Promise<PetTypeDTO[]> {
    var result = await this.petTypeRestService.getAllPetTypes();
    return result;
  }

  @Get(":petTypeId")
  async getPetType(@Req() req: Request, @Param('petTypeId') petTypeId: number): Promise<PetTypeDTO> {
    var result = await this.petTypeRestService.getPetType(petTypeId);
    return result;
  }

  @Post("")
  async addPetType(@Req() req: Request, @Body() dto: PetTypeDTO): Promise<number> {
    var result = await this.petTypeRestService.addPetType(dto);
    return result;
  }

  @Put(":petTypeId")
  async updatePetType(@Req() req: Request, @Param('petTypeId') petTypeId: number, @Body() dto: PetTypeDTO): Promise<void> {
    return await this.petTypeRestService.updatePetType(petTypeId, dto);
  }

  @Delete(":petTypeId")
  async deletePetType(@Req() req: Request, @Param('petTypeId') petTypeId: number): Promise<void> {
    return await this.petTypeRestService.deletePetType(petTypeId);
  }
}