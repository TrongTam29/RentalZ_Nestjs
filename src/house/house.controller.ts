import { Body, Controller, Get, Post } from '@nestjs/common';
import { House } from './house.model';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
    constructor(private readonly houseService: HouseService) { }

    @Get('house')
    async getAllHouses(): Promise<House[]> {
        return this.houseService.getAll();
    }

    @Post('create-house')
    async createHouse(@Body() house: House): Promise<House> {
        return await this.houseService.createHouse(house);
    }
}