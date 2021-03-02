import { Controller,Get, Response, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { SearchThingService } from './search-thing.service';

@Controller('search')
export class SearchThingController {
    constructor(private thingdirectoryService: SearchThingService) {}

    @UseGuards(JwtAuthGuard)
    @Get('jsonpath')
    async searchJSONPath(@Query('query') query,@Response() res) {
    try {
        let ris = await this.thingdirectoryService.searchTD(query);
      res.status(200).send(ris).end();
    }
    catch (error) {
        res.status(400).end();
      }
    
    }
}

