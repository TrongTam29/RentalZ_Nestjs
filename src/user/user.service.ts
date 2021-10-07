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

    async createUser(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }
}
