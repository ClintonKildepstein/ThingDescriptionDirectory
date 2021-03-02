import { Controller, Get, Post, Param, Body, Delete, Put, Patch, Response, Render, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ThingdirectoryService } from './thingdirectory.service';


@Controller('td')
export class ThingdirectoryController {
  constructor(private thingdirectoryService: ThingdirectoryService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTD(@Body() data, @Response() res) {
    try {
      let id = await this.thingdirectoryService.createTD(data);
      res.setHeader('Location', 'http://localhost:3000/td/' + id);
      res.writeHead(201);
      res.end();
    }
    catch (error) {
      res.status(400).end();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async retrieveTD(@Param('id') id: string, @Response() res) {
    let exist = await this.thingdirectoryService.existID(id);
    if (exist == true) {
      try {
        let td = await this.thingdirectoryService.retrieveTD(id);
        res.status(201).send(td).end();
      } catch (error) {
        res.status(400).end();
      }
    }
    else { res.status(400).end(); }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async retrieveAllTD(@Response() res): Promise<any> {
    var alltd = [];
    alltd = await this.thingdirectoryService.retrieveAllTD();
    if (alltd.length == 0) { res.status(400).end(); }
    else { res.status(201).send(alltd).end(); }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteTD(@Response() res, @Param('id') id: string) {
    let exist = await this.thingdirectoryService.existID(id);
    if (exist == true) {
      this.thingdirectoryService.deleteTD(id);
      res.status(204).end();
    }
    else { res.status(400).end(); }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTD(@Body() data: any, @Param('id') id: string, @Response() res) {
    let exist = await this.thingdirectoryService.existID(id);
    if (exist == true) {
      try {
        var ris = await this.thingdirectoryService.updateTD(data, id);
        res.status(204).end();
      } catch (error) {
        res.status(400).end();
      }
    }
    else { res.status(400).end(); }

  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updatePartialTD(@Body() data: any, @Param('id') id: string, @Response() res) {
    let exist = await this.thingdirectoryService.existID(id);
    if (exist == true) {
      try {
        var ris = await this.thingdirectoryService.updatePartialTD(data, id);
        res.status(204).end();
      }
      catch (error) {
        res.status(400).end();
      }
    }
    else { res.status(400).end(); }

  }




}
