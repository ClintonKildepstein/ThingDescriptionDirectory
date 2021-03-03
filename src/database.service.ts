import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

import { ApiConfigService } from './api-config/api-config.service';

@Injectable()
export class DatabaseService {
  constructor(private readonly config: ApiConfigService) {}

  connect(): Promise<PoolClient> {
    const pool = new Pool({
      host: this.config.dbHostname,
      port: this.config.dbPort,
      user: this.config.dbUsername,
      password: this.config.dbPassword,
      database: this.config.dbName,
    });
    return pool.connect();
  }

  async init(){
    const client = await this.connect();
    let query = {
      text: 'DROP TABLE thingd',
    };
    await client.query(query);
    query = {
      text: 'CREATE TABLE IF NOT EXISTS thingd (id serial NOT NULL PRIMARY KEY, td jsonb NOT NULL );',
    };

    return client.query(query)
  }
}
