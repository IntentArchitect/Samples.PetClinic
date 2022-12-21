import { ApiProperty } from '@nestjs/swagger';

export class OwnerUpdateDTO {
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
}