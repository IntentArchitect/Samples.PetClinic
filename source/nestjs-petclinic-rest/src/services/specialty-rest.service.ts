import { Injectable } from '@nestjs/common';
import { SpecialtyDTO } from './dto/specialty.dto';
import { SpecialtyRepository } from './../repository/specialty.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { Specialty } from './../domain/entities/specialty.entity';

@Injectable()
export class SpecialtyRestService {

  //@IntentCanAdd()
  constructor(private specialtyRepository: SpecialtyRepository) { }

  @IntentIgnoreBody()
  async getAllSpecialties(): Promise<SpecialtyDTO[]> {
    var specialties = await this.specialtyRepository.find({ relations: SpecialtyDTO.requiredRelations });
    return Promise.all(specialties.map(x => SpecialtyDTO.fromSpecialty(x)));
  }

  @IntentIgnoreBody()
  async getSpecialty(specialtyId: number): Promise<SpecialtyDTO> {
    var specialty = await this.specialtyRepository.findOne({ where: { id: specialtyId }, relations: SpecialtyDTO.requiredRelations });
    return SpecialtyDTO.fromSpecialty(specialty);
  }

  @IntentIgnoreBody()
  async addSpecialty(dto: SpecialtyDTO): Promise<number> {
    var newSpecialty = {
      id: dto.id,
      name: dto.name,
    } as Specialty;

    await this.specialtyRepository.save(newSpecialty);
    return newSpecialty.id;
  }

  @IntentIgnoreBody()
  async updateSpecialty(specialtyId: number, dto: SpecialtyDTO): Promise<void> {
    var existingSpecialty = await this.specialtyRepository.findOneBy({ id: specialtyId });
    existingSpecialty.id = dto.id;
    existingSpecialty.name = dto.name;

    await this.specialtyRepository.save(existingSpecialty);
  }

  @IntentIgnoreBody()
  async deleteSpecialty(specialtyId: number): Promise<void> {
    var existingSpecialty = await this.specialtyRepository.findOneBy({ id: specialtyId });
    await this.specialtyRepository.remove(existingSpecialty);
  }
}
