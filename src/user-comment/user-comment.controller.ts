import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { UserComment } from './user-comment.model';
import { UserCommentService } from './user-comment.service';

@Controller('user-comment')
export class UserCommentController {
    constructor(private readonly userCommentService: UserCommentService) { }

    @Get('user-comment')
    async getAllUserComment(): Promise<UserComment[]> {
        return this.userCommentService.findAll();
    }

    @Delete('delete')
    async delete(@Query('id') id: number): Promise<any> {
        return this.userCommentService.delete(id);
    }
    @Post('create-user-comment')
    async createUserComment(@Body() userComment: UserComment): Promise<UserComment> {
        return await this.userCommentService.createUserComment(userComment);
    }

    @Get('list-comment')
    async findCommentByHouseId(@Query('houseId') houseId: number): Promise<UserComment[]> {
        return await this.userCommentService.findCommentbyHouseId(houseId);
    }
}
