import { Controller, Logger, Get, Post, Body, Param, Put, Delete, Req, Request } from '@nestjs/common';
import { OwnerDTO } from './../../services/dto/owner.dto';
import { OwnerCreateDTO } from './../../services/dto/owner-create.dto';
import { OwnerUpdateDTO } from './../../services/dto/owner-update.dto';
import { OwnerRestService } from './../../services/owner-rest.service';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiNoContentResponse } from '@nestjs/swagger';

@ApiTags('OwnerRest')
@Controller('api/owners')
export class OwnerRestController {
  logger = new Logger('OwnerRestController');

  constructor(private readonly ownerRestService: OwnerRestService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: OwnerDTO,
    isArray: true,
  })
  async getOwners(@Req() req: Request): Promise<OwnerDTO[]> {
    const result = await this.ownerRestService.getOwners();
    return result;
  }

  @Post('')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async addOwner(@Req() req: Request, @Body() dto: OwnerCreateDTO): Promise<void> {
    return await this.ownerRestService.addOwner(dto);
  }

  @Get(':ownerId')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: OwnerDTO,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Response not found.' })
  async getOwner(@Req() req: Request, @Param('ownerId') ownerId: number): Promise<OwnerDTO> {
    const result = await this.ownerRestService.getOwner(ownerId);
    return result;
  }

  @Put(':ownerId')
  @ApiNoContentResponse({
    description: 'Successfully updated.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async updateOwner(@Req() req: Request, @Param('ownerId') ownerId: number, @Body() dto: OwnerUpdateDTO): Promise<void> {
    return await this.ownerRestService.updateOwner(ownerId, dto);
  }

  @Delete(':ownerId')
  @ApiOkResponse({
    description: 'Successfully deleted.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async deleteOwner(@Req() req: Request, @Param('ownerId') ownerId: number): Promise<void> {
    return await this.ownerRestService.deleteOwner(ownerId);
  }

  @Get('*/lastname/:lastName')
  @ApiOkResponse({
    description: 'Result retrieved successfully.',
    type: OwnerDTO,
    isArray: true,
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  async getOwnersList(@Req() req: Request, @Param('lastName') lastName: string): Promise<OwnerDTO[]> {
    const result = await this.ownerRestService.getOwnersList(lastName);
    return result;
  }
}