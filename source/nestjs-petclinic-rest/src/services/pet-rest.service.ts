import { Injectable } from '@nestjs/common';
import { PetDTO } from './dto/pet.dto';
import { PetCreateDTO } from './dto/pet-create.dto';
import { PetUpdateDTO } from './dto/pet-update.dto';
import { PetRepository } from './../repository/pet.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { Pet } from './../domain/entities/pet.entity';
import { OwnerRepository } from 'src/repository/owner.repository';
import { PetTypeRepository } from 'src/repository/pet-type.repository';

@Injectable()
export class PetRestService {

  //@IntentCanAdd()
  constructor(private petRepository: PetRepository, private ownerRepository: OwnerRepository, private petTypeRepository: PetTypeRepository) {}

  @IntentIgnoreBody()
  async getPet(petId: number): Promise<PetDTO> {
    var pet = await this.petRepository.findOne(petId, { relations: PetDTO.requiredRelations });
    return PetDTO.fromPet(pet);
  }

  @IntentIgnoreBody()
  async addPet(dto: PetCreateDTO): Promise<void> {
    var owner = await this.ownerRepository.findOne(dto.ownerId);
    var petType = await this.petTypeRepository.findOne(dto.petTypeId);
    var newPet = {
      owner: owner,
      name: dto.name,
      birthDate: dto.birthDate,
      petType: petType
    } as Pet;
      
    await this.petRepository.save(newPet);
  }

  @IntentIgnoreBody()
  async updatePet(petId: number, dto: PetUpdateDTO): Promise<void> {
    var petType = await this.petTypeRepository.findOne(dto.petTypeId);
    var existingPet = await this.petRepository.findOne(petId);
    existingPet.name = dto.name;
    existingPet.birthDate = dto.birthDate;
    existingPet.petType = petType;

    await this.petRepository.save(existingPet);
  }

  @IntentIgnoreBody()
  async deletePet(petId: number): Promise<void> {
    var existingPet = await this.petRepository.findOne(petId);
    await this.petRepository.remove(existingPet);
  }
}
