import { Visit } from './../../domain/entities/visit.entity';import { ApiProperty } from '@nestjs/swagger';

export class PetVisitDTO
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  visitDate: Date;

  @ApiProperty()
  description: string;

  static fromVisit(visit: Visit) {
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