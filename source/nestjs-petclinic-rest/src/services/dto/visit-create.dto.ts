import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class VisitCreateDTO
{
  @ApiProperty()
  petId: number;

  @ApiProperty()
  @Type(() => Date)
  visitDate: Date;

  @ApiProperty()
  description: string;
}