import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantDto } from './dtos/restaurant.dto';
import { Restaurant } from './schema/restaurant_schema';

@Controller('restaurants')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  public getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getRestaurants();
  }

  @Get(':id')
  public getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.getRestaurantById(id);
  }

  @Post()
  public createRestaurant(@Body() body: RestaurantDto) : Promise<Restaurant> {
    return this.restaurantService.createRestaurant(body);
  }

  @Delete()
  public async deleteRestaurant(
    @Query('id') id: string,
  ): Promise<Restaurant | null> {
    await this.restaurantService.getRestaurantById(id);
    return this.restaurantService.deleteRestaurant(id);
  }

  @Put(':id')
  public async updateRestaurant(
    @Param('id') id: string,
    @Body() body: RestaurantDto,
  ): Promise<Restaurant | null> {
    await this.restaurantService.getRestaurantById(id);
    await this.restaurantService.updateRestaurant(id, body);
    return this.getRestaurantById(id);
  }
}
