import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PetDTO } from './../../services/dto/pet.dto';
import { PetCreateDTO } from './../../services/dto/pet-create.dto';
import { PetUpdateDTO } from './../../services/dto/pet-update.dto';
import { PetRestService } from './../../services/pet-rest.service';


@Controller('api/pets')
export class PetRestController {
  logger = new Logger('PetRestController');

  constructor(private readonly petRestService: PetRestService) {}

  @Get(":petId")
  async getPet(@Req() req: Request, @Param('petId') petId: number): Promise<PetDTO> {
    var result = await this.petRestService.getPet(petId);
    return result;
  }

  @Post("")
  async addPet(@Req() req: Request, @Body() dto: PetCreateDTO): Promise<void> {
    return await this.petRestService.addPet(dto);
  }

  @Put(":petId")
  async updatePet(@Req() req: Request, @Param('petId') petId: number, @Body() dto: PetUpdateDTO): Promise<void> {
    return await this.petRestService.updatePet(petId, dto);
  }

  @Delete(":petId")
  async deletePet(@Req() req: Request, @Param('petId') petId: number): Promise<void> {
    return await this.petRestService.deletePet(petId);
  }
}