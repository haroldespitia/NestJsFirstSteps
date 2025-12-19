import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type restaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Contact {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  isOpen: boolean;

  @Prop()
  contact: Contact;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
