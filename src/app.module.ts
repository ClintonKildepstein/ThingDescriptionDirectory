import { Module } from '@nestjs/common';
import { ApiConfigModule } from './api-config/api-config.module';
import { DatabaseService } from './database.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchThingController } from './search-thing/search-thing.controller';
import { SearchThingService } from './search-thing/search-thing.service';
import { ThingdirectoryController } from './thingdirectory/thingdirectory.controller';
import { ThingdirectoryService } from './thingdirectory/thingdirectory.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ApiConfigModule, AuthModule, UsersModule],
  controllers: [AppController, ThingdirectoryController, SearchThingController],
  providers: [DatabaseService, AppService, ThingdirectoryService, SearchThingService],
})
export class AppModule {}
