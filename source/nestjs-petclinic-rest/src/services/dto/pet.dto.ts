import { PetVisitDTO } from './pet-visit.dto';
import { Pet } from './../../domain/entities/pet.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PetDTO
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @Type(() => Date)
  birthDate: Date;

  @ApiProperty()
  petTypeId: number;

  @ApiProperty()
  petTypeName: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  ownerFirstName: string;

  @ApiProperty()
  ownerLastName: string;

  @ApiProperty()
  visits: PetVisitDTO[];

  static fromPet(pet: Pet) {
    if (pet == null) {
        return null;
    }
    const dto = new PetDTO();
    dto.id = pet.id;
    dto.name = pet.name;
    dto.birthDate = pet.birthDate;
    dto.petTypeId = pet.petType?.id;
    dto.petTypeName = pet.petType?.name;
    dto.ownerId = pet.owner?.id;
    dto.ownerFirstName = pet.owner?.firstName;
    dto.ownerLastName = pet.owner?.lastName;
    dto.visits = pet.visits?.map(x => PetVisitDTO.fromVisit(x));
    return dto;
  }

  static requiredRelations: string[] = ["petType", "owner", "visits"];
}