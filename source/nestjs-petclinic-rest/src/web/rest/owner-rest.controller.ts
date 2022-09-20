import { Controller, Logger, Get, Post, Body, Param, Put, Delete, Req, Request } from '@nestjs/common';
import { OwnerDTO } from './../../services/dto/owner.dto';
import { OwnerCreateDTO } from './../../services/dto/owner-create.dto';
import { OwnerUpdateDTO } from './../../services/dto/owner-update.dto';
import { OwnerRestService } from './../../services/owner-rest.service';

@Controller('api/owners')
export class OwnerRestController {
  logger = new Logger('OwnerRestController');

  constructor(private readonly ownerRestService: OwnerRestService) {}

  @Get("")
  async getOwners(@Req() req: Request): Promise<OwnerDTO[]> {
    var result = await this.ownerRestService.getOwners();
    return result;
  }

  @Post("")
  async addOwner(@Req() req: Request, @Body() dto: OwnerCreateDTO): Promise<void> {
    return await this.ownerRestService.addOwner(dto);
  }

  @Get(":ownerId")
  async getOwner(@Req() req: Request, @Param('ownerId') ownerId: number): Promise<OwnerDTO> {
    var result = await this.ownerRestService.getOwner(ownerId);
    return result;
  }

  @Put(":ownerId")
  async updateOwner(@Req() req: Request, @Param('ownerId') ownerId: number, @Body() dto: OwnerUpdateDTO): Promise<void> {
    return await this.ownerRestService.updateOwner(ownerId, dto);
  }

  @Delete(":ownerId")
  async deleteOwner(@Req() req: Request, @Param('ownerId') ownerId: number): Promise<void> {
    return await this.ownerRestService.deleteOwner(ownerId);
  }

  @Get("*/lastname/:lastName")
  async getOwnersList(@Req() req: Request, @Param('lastName') lastName: string): Promise<OwnerDTO[]> {
    var result = await this.ownerRestService.getOwnersList(lastName);
    return result;
  }
}