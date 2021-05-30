import { ApiProperty } from '@nestjs/swagger';

export class PetCreateDTO
{
  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  petTypeId: number;
}