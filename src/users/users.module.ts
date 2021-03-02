import { Module } from '@nestjs/common';
import { DatabaseService } from './../database.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [DatabaseService, UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
