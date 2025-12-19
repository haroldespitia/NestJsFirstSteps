import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {

    constructor(private restaurantService: RestaurantService) {}

    @Get()
    public getAllRestaurants() {
        return this.restaurantService.getRestaurants();
    }

    @Get(':id')
    public getRestaurantById(@Param() id:number) {
        return id;
    }

    @Get(':id/:name/:m')
    public getRestaurantByParams(@Param() params: {id: number, name: string, m: string}) {
        return params;
    }

    @Delete()
    public deleteRestaurant(@Query('id') id: number) {
        return `Restaurant ${id} was deleted`;
    }

    @Post()
    public createRestaurant(@Body() body:any) {
        return this.restaurantService.createRestaurant(body);
    }

    @Put(':id')
    public updateRestaurant(@Param() id:number, @Body() body: any) {
        return id;
    }
}
