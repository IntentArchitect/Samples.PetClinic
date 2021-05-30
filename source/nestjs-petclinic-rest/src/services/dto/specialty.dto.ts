import { Specialty } from './../../domain/entities/specialty.entity';import { ApiProperty } from '@nestjs/swagger';

export class SpecialtyDTO
{
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  static fromSpecialty(specialty: Specialty) {
    if (specialty == null) {
        return null;
    }
    const dto = new SpecialtyDTO();
    dto.id = specialty.id;
    dto.name = specialty.name;
    return dto;
  }

  static requiredRelations: string[] = [];
}