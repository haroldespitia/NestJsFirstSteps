import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Restaurant } from './schema/restaurant_schema';
import { RestaurantDto } from './dtos/restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  public async getRestaurants() : Promise<Restaurant[]> {
    return this.restaurantModel.find();
  }

  public async createRestaurant(
    restaurant: RestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantModel.create(restaurant);
  }

  public async getRestaurantById(id: string): Promise<Restaurant>  {
    this.validateIdFormat(id);
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} not found`);
    }
    return restaurant;
  }

  public async deleteRestaurant(id: string): Promise<Restaurant | null> {
    return this.restaurantModel.findByIdAndDelete(id);
  }

  public async updateRestaurant(
    id: string,
    restaurant: Restaurant,
  ): Promise<Restaurant | null> {
    return this.restaurantModel.findByIdAndUpdate(id, restaurant);
  }

  private validateIdFormat(id: string): void {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id format is invalid');
    }
  }
}
