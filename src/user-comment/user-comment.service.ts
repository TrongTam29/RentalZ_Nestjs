import { Injectable, Inject } from '@nestjs/common';
import { UserComment } from './user-comment.model';

@Injectable()
export class UserCommentService {
    constructor(
        @Inject('USER_COMMENT_REPOSITORY')
        private userCommentRepository: typeof UserComment,
    ) { }

    async findAll(): Promise<UserComment[]> {
        return this.userCommentRepository.findAll();
    }

    async createUserComment(userComment: UserComment): Promise<UserComment> {
        return await this.userCommentRepository.create(
            userComment
        );
    }

    async delete(houseId: number): Promise<any> {
        return this.userCommentRepository.destroy({ where: { houseId: houseId } });
    }

    async findCommentbyHouseId(houseId: number): Promise<UserComment[]> {
        return this.userCommentRepository.findAll({ where: { houseId: houseId } })
    }
}
