import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join, resolve } from 'path';
import { AppModule } from './app.module';
import path = require('path');
var Ajv = require('ajv');
import * as schema from './thingdirectory/jsonschema.json';
import * as dt from './views/directorything.json';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
 // app.use(express.static("public"));
 // app.use(__dirname, 'public');
  app.setViewEngine('hbs');
  
  await app.listen(3000); 
}
var ajv = new Ajv();
var validate = ajv.compile(schema);
var valid = validate(dt);
if (valid) {
   // console.log('Valid!');
  bootstrap(); 
}
else {
    //console.log('Invalid: ' + ajv.errorsText(validate.errors));
    throw new Error('Invalid TD: ' + ajv.errorsText(validate.errors));
}

