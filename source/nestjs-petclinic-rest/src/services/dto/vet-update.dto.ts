import { ApiProperty } from '@nestjs/swagger';

export class VetUpdateDTO
{
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  specialties: number[];
}