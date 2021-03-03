import { Injectable } from '@nestjs/common';
import { DatabaseService } from './../database.service';

@Injectable()
export class SearchThingService {
  constructor(private readonly databaseService: DatabaseService) {}

  async searchTD(queryJP): Promise<any> {
    const client = await this.databaseService.connect();
    const query = {
      text: 'SELECT jsonb_path_query(td, $1) FROM thingd',
      values: [queryJP],
    };
    return client
      .query(query)
      .then(res => {
        if (res.rows.length == 0) {
          throw new Error('No results');
        }
        return res.rows;
      })
      .catch(e => console.error(e.stack))
      .finally(() => {
        client.release();
      });
  }
}
