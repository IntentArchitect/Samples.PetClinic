import { PetDTO } from './pet.dto';
import { Owner } from './../../domain/entities/owner.entity';
import { ApiProperty } from '@nestjs/swagger';

export class OwnerDTO
{
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  pets: PetDTO[];

  static fromOwner(owner: Owner) {
    if (owner == null) {
        return null;
    }
    const dto = new OwnerDTO();
    dto.id = owner.id;
    dto.firstName = owner.firstName;
    dto.lastName = owner.lastName;
    dto.address = owner.address;
    dto.city = owner.city;
    dto.telephone = owner.telephone;
    dto.pets = owner.pets?.map(x => PetDTO.fromPet(x));
    return dto;
  }

  static requiredRelations: string[] = ["pets", "pets.petType", "pets.owner", "pets.visits"];
}