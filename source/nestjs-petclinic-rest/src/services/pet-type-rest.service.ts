import { Injectable } from '@nestjs/common';
import { PetTypeDTO } from './dto/pet-type.dto';
import { PetTypeRepository } from './../repository/pet-type.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { PetType } from './../domain/entities/pet-type.entity';

@Injectable()
export class PetTypeRestService {

  //@IntentCanAdd()
  constructor(private petTypeRepository: PetTypeRepository) {}

  @IntentIgnoreBody()
  async getAllPetTypes(): Promise<PetTypeDTO[]> {
    var petTypes = await this.petTypeRepository.find({ relations: PetTypeDTO.requiredRelations });
    return petTypes.map(x => PetTypeDTO.fromPetType(x));
  }

  @IntentIgnoreBody()
  async getPetType(petTypeId: number): Promise<PetTypeDTO> {
    var petType = await this.petTypeRepository.findOne(petTypeId, { relations: PetTypeDTO.requiredRelations });
    return PetTypeDTO.fromPetType(petType);
  }

  @IntentIgnoreBody()
  async addPetType(dto: PetTypeDTO): Promise<number> {
    var newPetType = {
      id: dto.id,
      name: dto.name,
    } as PetType;
      
    await this.petTypeRepository.save(newPetType);
    return newPetType.id;
  }

  @IntentIgnoreBody()
  async updatePetType(petTypeId: number, dto: PetTypeDTO): Promise<void> {
    var existingPetType = await this.petTypeRepository.findOne(petTypeId);
    existingPetType.id = dto.id;
    existingPetType.name = dto.name;

    await this.petTypeRepository.save(existingPetType);
  }

  @IntentIgnoreBody()
  async deletePetType(petTypeId: number): Promise<void> {
    var existingPetType = await this.petTypeRepository.findOne(petTypeId);
    await this.petTypeRepository.remove(existingPetType);
  }
}
