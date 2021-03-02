import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchThingController } from './search-thing/search-thing.controller';
import { SearchThingService } from './search-thing/search-thing.service';
import { ThingdirectoryController } from './thingdirectory/thingdirectory.controller';
import { ThingdirectoryService } from './thingdirectory/thingdirectory.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ThingdirectoryController, SearchThingController],
  providers: [AppService, ThingdirectoryService, SearchThingService],
})
export class AppModule {}
