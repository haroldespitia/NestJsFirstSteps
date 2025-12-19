import { IsBoolean, IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ContactDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;
}

export class RestaurantDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsBoolean({ message: 'Please provide a valid boolean value' })
  isOpen: boolean;

  @ValidateNested()
  @Type(() => ContactDto)
  contact: ContactDto;
}
