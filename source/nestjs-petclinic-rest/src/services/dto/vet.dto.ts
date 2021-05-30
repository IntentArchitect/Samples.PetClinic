import { SpecialtyDTO } from './specialty.dto';
import { Vet } from './../../domain/entities/vet.entity';
import { ApiProperty } from '@nestjs/swagger';

export class VetDTO
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  specialties: SpecialtyDTO[];

  static fromVet(vet: Vet) {
    if (vet == null) {
        return null;
    }
    const dto = new VetDTO();
    dto.id = vet.id;
    dto.firstName = vet.firstName;
    dto.lastName = vet.lastName;
    dto.specialties = vet.specialties?.map(x => SpecialtyDTO.fromSpecialty(x));
    return dto;
  }

  static requiredRelations: string[] = ["specialties"];
}