import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

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

    async delete(id: number): Promise<any> {
        return await this.houseRepository.destroy({ where: { id: id } })
    }

    async fillterHouse(type: string, furniture: string, city: string): Promise<House[]> {
        if (type != null && furniture != null && city != null) {
            return await this.houseRepository.findAll({
                where: {
                    type: type,
                    furnitureType: furniture,
                    city: city
                },
            });
        } else
            if (type != null && furniture != null && city == null) {
                return await this.houseRepository.findAll({
                    where: {
                        type: type,
                        furnitureType: furniture,
                    },
                });
            } else if (type != null && furniture == null && city != null) {
                return await this.houseRepository.findAll({
                    where: {
                        type: type,
                        city: city
                    },
                });

            }
            else if (type == null && furniture != null && city != null) {
                return await this.houseRepository.findAll({
                    where: {
                        furnitureType: furniture,
                        city: city
                    },
                });

            } else if (type == null && furniture == null && city != null) {
                return await this.houseRepository.findAll({
                    where: {
                        city: city
                    },
                });

            }
            else if (type == null && furniture != null && city == null) {
                return await this.houseRepository.findAll({
                    where: {
                        furnitureType: furniture,
                    },
                });

            }
            else if (type != null && furniture == null && city == null) {
                return await this.houseRepository.findAll({
                    where: {
                        type: type
                    },
                });

            } else return undefined
    }

    async findHouseByName(name: string): Promise<House> {
        return await this.houseRepository.findOne({
            where: {
                name: name
            }
        })
    }

    async findHouseById(id: number): Promise<House[]> {
        return await this.houseRepository.findAll({
            where: {
                userId: id
            }
        })
    }

    async updateHouse(id: number, house: House): Promise<[number, House[]]> {
        return await this.houseRepository.update(
            {
                name: house.name,
                price: house.price,
                type: house.type,
                city: house.city,
                address: house.address,
                furnityreType: house.furnitureType,
                bedroom: house.bedroom,
                toilet: house.toilet,
                diningroom: house.diningroom,
                image: house.image,
                detail: house.detail,
                userId: house.userId,

            },
            { where: { id: id }, });
    }
}


