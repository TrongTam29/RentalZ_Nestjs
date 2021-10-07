import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user';
import { HouseModule } from './house/house.module';
import { User } from './user';

@Module({
  imports: [UserModule, HouseModule],
  controllers: [AppController],
  providers: [AppService, User],
})
export class AppModule {}
