import { ApiProperty } from '@nestjs/swagger';

export class VetCreateDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  specialties: number[];
}