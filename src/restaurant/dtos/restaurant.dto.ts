import { IsBoolean, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @IsString()
  @ApiProperty({ type: String, example: 'John Doe' })
  name: string;

  @IsString()
  @ApiProperty({ type: String, example: 'Doe@example.com' })
  email: string;

  @IsString()
  @ApiProperty({ type: String, example: '876934523' })
  phone: string;
}

export class RestaurantDto {
  @IsString()
  @ApiProperty({ type: String, example: 'Creps and Waffles' })
  name: string;

  @IsString()
  @ApiProperty({ type: String, example: 'Lorem Ipsum' })
  address: string;

  @IsString()
  @ApiProperty({ type: String, example: 'Bogota DC' })
  city: string;

  @IsBoolean({ message: 'Please provide a valid boolean value' })
  @ApiProperty({ type: String, example: true })
  isOpen: boolean;

  @ValidateNested()
  @Type(() => ContactDto)
  @ApiProperty({ type: () => ContactDto })
  contact: ContactDto;
}
