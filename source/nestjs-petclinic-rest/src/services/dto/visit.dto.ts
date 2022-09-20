import { PetDTO } from './pet.dto';
import { Visit } from './../../domain/entities/visit.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class VisitDTO
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Type(() => Date)
  visitDate: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  pet: PetDTO;

  @ApiProperty()
  ownerId: number;

  static fromVisit(visit: Visit) {
    if (visit == null) {
        return null;
    }
    const dto = new VisitDTO();
    dto.id = visit.id;
    dto.visitDate = visit.visitDate;
    dto.description = visit.description;
    dto.pet = PetDTO.fromPet(visit.pet);
    dto.ownerId = visit.pet?.owner?.id;
    return dto;
  }

  static requiredRelations: string[] = ["pet", "pet.petType", "pet.owner", "pet.visits"];
}