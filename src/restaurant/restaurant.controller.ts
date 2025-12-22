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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('restaurants')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all the restaurants in the DB' })
  @ApiResponse({ status: 200, description: 'All the restaurants in the DB' })
  public getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getRestaurants();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns a restaurant identified by the ID' })
  @ApiResponse({
    status: 200,
    description: 'The restaurant identified by the ID',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The id of the restaurant',
  })
  public getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.getRestaurantById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Creates a new restaurant in the DB' })
  @ApiResponse({
    status: 200,
    description: 'A new restaurant was created successfully',
  })
  @ApiBody({ type: RestaurantDto })
  public createRestaurant(@Body() body: RestaurantDto): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(body);
  }

  @Delete()
  @ApiOperation({ summary: 'Deletes a restaurant from the DB' })
  @ApiResponse({
    status: 200,
    description: 'The restaurant was deleted successfully',
  })
  @ApiQuery({
    name: 'id',
    required: true,
  })
  public async deleteRestaurant(
    @Query('id') id: string,
  ): Promise<Restaurant | null> {
    await this.restaurantService.getRestaurantById(id);
    return this.restaurantService.deleteRestaurant(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Updates an existing restaurant in the DB' })
  @ApiResponse({
    status: 200,
    description: 'The existing restaurant information was updated successfully',
  })
  @ApiBody({ type: RestaurantDto })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The id of the restaurant',
  })
  public async updateRestaurant(
    @Param('id') id: string,
    @Body() body: RestaurantDto,
  ): Promise<Restaurant | null> {
    await this.restaurantService.getRestaurantById(id);
    await this.restaurantService.updateRestaurant(id, body);
    return this.getRestaurantById(id);
  }
}
