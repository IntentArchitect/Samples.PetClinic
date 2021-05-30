import { ApiProperty } from '@nestjs/swagger';

export class VisitCreateDTO
{
  @ApiProperty()
  petId: number;

  @ApiProperty()
  visitDate: Date;

  @ApiProperty()
  description: string;
}