import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { type } from 'os';
import { House } from './house.model';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
    constructor(private readonly houseService: HouseService) { }

    @Get('house')
    async getAll(): Promise<House[]> {
        return this.houseService.getAll();
    }

    @Post('create-house')
    async create(@Body() house: House): Promise<House> {
        return await this.houseService.createHouse(house);
    }

    @Delete('delete-house')
    async delete(@Query('id') id: number) {
        return this.houseService.delete(id)
    }

    @Get('fillter-house')
    async fillter(@Query('type') type: string, @Query('furniture') furniture: string, @Query('city') city: string): Promise<House[]> {
        return await this.houseService.fillterHouse(type, furniture, city);
    }

    @Get('find-house')
    async findByName(@Query('name') name: string): Promise<House> {
        return await this.houseService.findHouseByName(name);
    }

    @Get('find-house-by-id')
    async findById(@Query('id') id: number): Promise<House[]> {
        return await this.houseService.findHouseById(id);
    }

    @Put('update-house/:id')
    async update(@Body() house: House, @Param('id') id: number): Promise<[number, House[]]> {
        return await this.houseService.updateHouse(id, house);
    }
}