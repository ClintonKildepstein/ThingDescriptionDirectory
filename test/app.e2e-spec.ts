import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
var dataTest= require('./dataTest');
import { AuthModule } from './../src/auth/auth.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let authToken="";

  beforeEach(async () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
   jest.spyOn(console, 'log').mockImplementation(() => {});
    await dataTest.initializeDB();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule,AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should detect that we are not logged in', () => {
    return request(app.getHttpServer())
      .get('/td')
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('disallow invalid credentials', async () => {
    var authInfo= {"username": "elena", "password": "ciao2"};
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send(authInfo);
    expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
  });

  it('return an authorization token for valid credentials', async () => {
    var authInfo= {"username": "elena", "password": "ciao"};
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send(authInfo);
    expect(response.status).toBe(HttpStatus.CREATED);
    authToken = response.body;
    console.log(authToken["access_token"]);
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/td')
      .set("Authorization", "Bearer "+authToken["access_token"])
      .send(dataTest.wrongtd)
      .expect(400);
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/td/50')
      .set("Authorization", "Bearer "+authToken["access_token"])
      .send()
      .expect(400);
  });

 
  it('/ (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/td/1')
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(204);
  });


  
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/td/1')
      .expect(201)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(dataTest.td);
  });

  
  it('/ (GETALL)', () => {
    return request(app.getHttpServer())
      .get('/td')
      .expect(201)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(dataTest.alltd);
  });
  
  it('/ (SEARCH)', () => {
    return request(app.getHttpServer())
      .get('/search/jsonpath?query=$.actions.decrement')
      .expect(200)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(dataTest.searchtd);
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/td')
      .send(dataTest.td)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(201);
  });
  
  it('/ (PUT)', () => {
    return request(app.getHttpServer())
      .put('/td/1')
      .send(dataTest.newtd)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(204);
  });


  it('/ (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/td/1')
      .send(dataTest.partialtd)
      .set('Authorization', 'Bearer '+authToken["access_token"])
      .expect(204);
  });
});
