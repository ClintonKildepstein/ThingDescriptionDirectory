import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { path } from 'app-root-path';
import * as Joi from '@hapi/joi';

import { ApiConfigService } from './api-config.service';

const envFilePath = `${path}/config/${process.env.NODE_ENV ||
  'development'}.env`;

const validationSchema = Joi.object({
  DB_HOSTNAME: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, validationSchema })],
  providers: [ApiConfigService],
  exports: [ApiConfigService]
})
export class ApiConfigModule {}
