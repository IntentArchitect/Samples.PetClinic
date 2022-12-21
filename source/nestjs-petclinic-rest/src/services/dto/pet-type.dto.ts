import { PetType } from './../../domain/entities/pet-type.entity';import { ApiProperty } from '@nestjs/swagger';

export class PetTypeDTO {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  static fromPetType(petType: PetType): PetTypeDTO {
    if (petType == null) {
      return null;
    }
    const dto = new PetTypeDTO();
    dto.id = petType.id;
    dto.name = petType.name;
    return dto;
  }

  static requiredRelations: string[] = [];
}