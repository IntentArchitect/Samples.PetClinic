import { Injectable } from '@nestjs/common';
import { VetDTO } from './dto/vet.dto';
import { VetCreateDTO } from './dto/vet-create.dto';
import { VetUpdateDTO } from './dto/vet-update.dto';
import { VetRepository } from './../repository/vet.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { Vet } from './../domain/entities/vet.entity';
import { SpecialtyRepository } from 'src/repository/specialty.repository';
import { In } from 'typeorm';

@Injectable()
export class VetRestService {

  //@IntentCanAdd()
  constructor(private vetRepository: VetRepository, private specialtyRepository: SpecialtyRepository) { }

  @IntentIgnoreBody()
  async getAllVets(): Promise<VetDTO[]> {
    var vets = await this.vetRepository.find({ relations: VetDTO.requiredRelations });
    return vets.map(x => VetDTO.fromVet(x));
  }

  @IntentIgnoreBody()
  async getVet(vetId: number): Promise<VetDTO> {
    var vet = await this.vetRepository.findOne({ where: { id: vetId }, relations: VetDTO.requiredRelations });
    return VetDTO.fromVet(vet);
  }

  @IntentIgnoreBody()
  async addVet(dto: VetCreateDTO): Promise<void> {
    var specialties = await this.specialtyRepository.findBy({ id: In(dto.specialties) });
    var newVet = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      specialties: specialties
    } as Vet;

    await this.vetRepository.save(newVet);
  }

  @IntentIgnoreBody()
  async updateVet(vetId: number, dto: VetUpdateDTO): Promise<void> {
    var specialties = await this.specialtyRepository.findBy({ id: In(dto.specialties) });
    var existingVet = await this.vetRepository.findOneBy({ id: vetId });
    existingVet.firstName = dto.firstName;
    existingVet.lastName = dto.lastName;
    existingVet.specialties = specialties;

    await this.vetRepository.save(existingVet);
  }

  @IntentIgnoreBody()
  async deleteVet(vetId: number): Promise<void> {
    var existingVet = await this.vetRepository.findOneBy({ id: vetId });
    await this.vetRepository.remove(existingVet);
  }
}
