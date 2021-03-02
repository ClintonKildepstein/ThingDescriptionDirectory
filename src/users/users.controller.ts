import { Controller, Response, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @Post()
    async registerUser(@Body() data, @Response() res) {
        try {
            var register = await this.usersService.registerUser(data);
            res.status(201).end();
        }
        catch (error) {
            res.status(400).end();
        }

    }
}
