import { Controller, Logger, Get, Req, Request, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VetDTO } from './../../services/dto/vet.dto';
import { VetCreateDTO } from './../../services/dto/vet-create.dto';
import { VetUpdateDTO } from './../../services/dto/vet-update.dto';
import { VetRestService } from './../../services/vet-rest.service';


@Controller('api/vets')
export class VetRestController {
  logger = new Logger('VetRestController');

  constructor(private readonly vetRestService: VetRestService) {}

  @Get("")
  async getAllVets(@Req() req: Request): Promise<VetDTO[]> {
    var result = await this.vetRestService.getAllVets();
    return result;
  }

  @Get(":vetId")
  async getVet(@Req() req: Request, @Param('vetId') vetId: number): Promise<VetDTO> {
    var result = await this.vetRestService.getVet(vetId);
    return result;
  }

  @Post("")
  async addVet(@Req() req: Request, @Body() dto: VetCreateDTO): Promise<void> {
    return await this.vetRestService.addVet(dto);
  }

  @Put(":vetId")
  async updateVet(@Req() req: Request, @Param('vetId') vetId: number, @Body() dto: VetUpdateDTO): Promise<void> {
    return await this.vetRestService.updateVet(vetId, dto);
  }

  @Delete(":vetId")
  async deleteVet(@Req() req: Request, @Param('vetId') vetId: number): Promise<void> {
    return await this.vetRestService.deleteVet(vetId);
  }
}