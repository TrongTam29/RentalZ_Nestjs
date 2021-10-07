import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HouseController],
  providers: [HouseService]
})
export class HouseModule { }
