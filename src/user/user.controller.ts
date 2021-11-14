import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('user')
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Delete('delete')
    async deleteUser(@Query('id') id: number) {
        return this.userService.delete(id)
    }

    @Post('create-user')
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.createUser(user);
    }

    @Get('find-user')
    async find(@Query('id') id: number): Promise<User> {
        return await this.userService.findById(id);
    }

    @Get('login')
    async userLogin(@Query('email') email: string, @Query('password') password: string): Promise<any> {
        try {
            if (!email || !password) {
                throw new HttpException(
                    'Email or passowrd is empty',
                    HttpStatus.FORBIDDEN,
                );
            } else {
                const user = await this.userService.login(
                    email,
                    password,
                );
                if (!user) {
                    throw new HttpException(
                        'Email or passowrd is invalid',
                        HttpStatus.FORBIDDEN,
                    );
                } else return user
            }
        } catch (error) {
            throw new HttpException(error, HttpStatus.FORBIDDEN);
        }
    }

    @Patch('update-image/:id')
    async update(@Query('image') image: String, @Param('id') id: number): Promise<[number, User[]]> {
        return await this.userService.updateImage(image, id);
    }


}