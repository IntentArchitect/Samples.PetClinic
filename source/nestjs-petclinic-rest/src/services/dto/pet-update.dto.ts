import { ApiProperty } from '@nestjs/swagger';

export class PetUpdateDTO
{
  @ApiProperty()
  name: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  petTypeId: number;
}