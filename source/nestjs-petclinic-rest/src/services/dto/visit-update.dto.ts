import { ApiProperty } from '@nestjs/swagger';

export class VisitUpdateDTO
{
  @ApiProperty()
  visitDate: Date;

  @ApiProperty()
  description: string;
}