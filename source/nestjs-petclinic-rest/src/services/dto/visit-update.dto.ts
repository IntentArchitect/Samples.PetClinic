import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class VisitUpdateDTO {
  @ApiProperty()
  @Type(() => Date)
  visitDate: Date;

  @ApiProperty()
  description: string;
}