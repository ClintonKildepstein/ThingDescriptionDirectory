import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import * as dt2 from '../src/views/directorything.json';
var Ajv = require('ajv');
import * as schema from '../src/thingdirectory/jsonschema.json';
import { AuthModule } from '../src/auth/auth.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule,AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("should be valid", () => {
    var ajv = new Ajv();
    var validate = ajv.compile(schema);
    var valid = validate(dt2);
   /* if (valid==false){
       console.log('Invalid: ' + ajv.errorsText(validate.errors));
    }*/
    expect(valid).toBe(true);
  });
 
  

});
