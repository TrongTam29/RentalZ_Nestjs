import { Inject, Injectable } from '@nestjs/common';
import { House } from './house.model';

@Injectable()
export class HouseService {
    constructor(
        @Inject('HOUSE_REPOSITORY')
        private houseRepository: typeof House,
    ) { }

    async getAll(): Promise<House[]> {
        return await this.houseRepository.findAll();
    }

    async createHouse(house: House): Promise<House> {
        return await this.houseRepository.create(house);
    }
}
