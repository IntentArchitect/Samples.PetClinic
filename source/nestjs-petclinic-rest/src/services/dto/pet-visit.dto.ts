import { Visit } from './../../domain/entities/visit.entity';import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PetVisitDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Type(() => Date)
  visitDate: Date;

  @ApiProperty()
  description: string;

  static fromVisit(visit: Visit): PetVisitDTO {
    if (visit == null) {
      return null;
    }
    const dto = new PetVisitDTO();
    dto.id = visit.id;
    dto.visitDate = visit.visitDate;
    dto.description = visit.description;
    return dto;
  }

  static requiredRelations: string[] = [];
}