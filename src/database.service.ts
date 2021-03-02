import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

@Injectable()
export class DatabaseService {
  connect(): Promise<PoolClient> {
    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'ThingDirectory',
      password: 'ciaociao',
      port: 5432,
    });
    return pool.connect();
  }
}
