import { ApiProperty } from '@nestjs/swagger';

export class OwnerCreateDTO {
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