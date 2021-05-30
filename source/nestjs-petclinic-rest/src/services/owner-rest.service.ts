import { Injectable } from '@nestjs/common';
import { OwnerDTO } from './dto/owner.dto';
import { OwnerCreateDTO } from './dto/owner-create.dto';
import { OwnerUpdateDTO } from './dto/owner-update.dto';
import { OwnerRepository } from './../repository/owner.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { Owner } from './../domain/entities/owner.entity';

@Injectable()
export class OwnerRestService {

  //@IntentCanAdd()
  constructor(private ownerRepository: OwnerRepository) {}

  @IntentIgnoreBody()
  async getOwners(): Promise<OwnerDTO[]> {
    var owners = await this.ownerRepository.find({ relations: OwnerDTO.requiredRelations });
    return owners.map(x => OwnerDTO.fromOwner(x));
  }

  @IntentIgnoreBody()
  async addOwner(dto: OwnerCreateDTO): Promise<void> {
    var newOwner = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      address: dto.address,
      city: dto.city,
      telephone: dto.telephone,
    } as Owner;
      
    await this.ownerRepository.save(newOwner);
  }

  @IntentIgnoreBody()
  async getOwner(ownerId: number): Promise<OwnerDTO> {
    var owner = await this.ownerRepository.findOne(ownerId, { relations: OwnerDTO.requiredRelations });
    return OwnerDTO.fromOwner(owner);
  }

  @IntentIgnoreBody()
  async updateOwner(ownerId: number, dto: OwnerUpdateDTO): Promise<void> {
    var existingOwner = await this.ownerRepository.findOne(ownerId);
    existingOwner.firstName = dto.firstName;
    existingOwner.lastName = dto.lastName;
    existingOwner.address = dto.address;
    existingOwner.city = dto.city;
    existingOwner.telephone = dto.telephone;

    await this.ownerRepository.save(existingOwner);
  }

  @IntentIgnoreBody()
  async deleteOwner(ownerId: number): Promise<void> {
    var existingOwner = await this.ownerRepository.findOne(ownerId);
    await this.ownerRepository.remove(existingOwner);
  }

  @IntentIgnoreBody()
  async getOwnersList(lastName: string): Promise<OwnerDTO[]> {
    throw new Error("Write your implementation for this service here...");
  }
}
