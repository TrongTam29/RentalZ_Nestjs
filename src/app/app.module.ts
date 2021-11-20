import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { HouseModule } from '../house/house.module';
import { UserService } from '../user/user.service';
import { userProviders } from '../user/user.provider';
import { HouseService } from '../house/house.service';
import { houseProviders } from '../house/house.provider';
import { UserCommentModule } from 'src/user-comment/user-comment.module';
import { UserCommentService } from 'src/user-comment/user-comment.service';
import { userCommentProviders } from 'src/user-comment/user-commnet.provider';


@Module({
  imports: [UserModule, HouseModule, UserCommentModule],
  controllers: [AppController],
  providers: [AppService,
    UserService,
    ...userProviders,
    HouseService,
    ...houseProviders,
    UserCommentService,
    ...userCommentProviders
  ],
})
export class AppModule { }
