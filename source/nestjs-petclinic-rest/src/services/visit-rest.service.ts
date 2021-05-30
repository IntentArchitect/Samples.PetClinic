import { Injectable } from '@nestjs/common';
import { VisitDTO } from './dto/visit.dto';
import { VisitCreateDTO } from './dto/visit-create.dto';
import { VisitUpdateDTO } from './dto/visit-update.dto';
import { VisitRepository } from './../repository/visit.repository';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { Visit } from './../domain/entities/visit.entity';
import { PetRepository } from 'src/repository/pet.repository';

@Injectable()
export class VisitRestService {

  //@IntentCanAdd()
  constructor(private visitRepository: VisitRepository, private petRepository: PetRepository) {}

  @IntentIgnoreBody()
  async getVisit(visitId: number): Promise<VisitDTO> {
    var visit = await this.visitRepository.findOne(visitId, { relations: VisitDTO.requiredRelations });
    return VisitDTO.fromVisit(visit);
  }

  @IntentIgnoreBody()
  async addVisit(dto: VisitCreateDTO): Promise<void> {
    var pet = await this.petRepository.findOne(dto.petId);
    var newVisit = {
      pet: pet,
      visitDate: dto.visitDate,
      description: dto.description,
    } as Visit;
      
    await this.visitRepository.save(newVisit);
  }

  @IntentIgnoreBody()
  async updateVisit(visitId: number, dto: VisitUpdateDTO): Promise<void> {
    var existingVisit = await this.visitRepository.findOne(visitId);
    existingVisit.visitDate = dto.visitDate;
    existingVisit.description = dto.description;

    await this.visitRepository.save(existingVisit);
  }

  @IntentIgnoreBody()
  async deleteVisit(visitId: number): Promise<void> {
    var existingVisit = await this.visitRepository.findOne(visitId);
    await this.visitRepository.remove(existingVisit);
  }
}
