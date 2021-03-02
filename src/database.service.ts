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
}
