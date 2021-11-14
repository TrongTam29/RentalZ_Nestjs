import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async delete(id: number): Promise<any> {
        return await this.userRepository.destroy({ where: { id: id } })
    }

    async createUser(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }

    async login(email: string, pass: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { email: email.toLowerCase(), password: pass } })
        if (!user) {
            return undefined
        } else return user
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id: id } });
    }

    async updateImage(image: String, id: number): Promise<[number, User[]]> {
        return await this.userRepository.update({ image: image }, { where: { id: id }, },);
    }
}
