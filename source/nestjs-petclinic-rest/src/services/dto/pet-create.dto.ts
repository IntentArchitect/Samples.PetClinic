import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PetCreateDTO
{
  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @Type(() => Date)
  birthDate: Date;

  @ApiProperty()
  petTypeId: number;
}