import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantService {

    private restaurants: any[];

    constructor() {
        this.restaurants = [];
    }

    public getRestaurants() {
        return this.restaurants;
    }

    public createRestaurant(data: any) {
        return this.restaurants.push(data);
    }
}
