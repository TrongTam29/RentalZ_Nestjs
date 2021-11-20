import { Module } from '@nestjs/common';
import { UserCommentController } from './user-comment.controller';
import { UserCommentService } from './user-comment.service';
import { userCommentProviders } from './user-commnet.provider';

@Module({
  controllers: [UserCommentController],
  providers: [
    UserCommentService,
    ...userCommentProviders]
})
export class UserCommentModule { }
