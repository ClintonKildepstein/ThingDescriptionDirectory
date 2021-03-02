import { DatabaseService } from './../database.service';
import { Injectable } from '@nestjs/common';
var Ajv = require('ajv');
//importo come file locale .. eliminato formato iri
import * as schema from './jsonschema.json';
const mergePatch = require('json-merge-patch');

@Injectable()
export class ThingdirectoryService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createTD(data: any): Promise<string> {
    var ajv = new Ajv();
    var validate = ajv.compile(schema);
    var valid = validate(data);

    if (!valid) {
      console.log('Invalid: ' + ajv.errorsText(validate.errors));
      throw new Error('Errore');
    }

    const client = await this.databaseService.connect();
    const query = {
      text: 'INSERT INTO thingd(td) VALUES($1)  RETURNING idt',
      values: [data],
    };

    return client
      .query(query)
      .then(res => {
        return res.rows[0].idt;
      })
      .finally(() => {
        client.release();
      });
  }

  async retrieveTD(id: string): Promise<string> {
    const client = await this.databaseService.connect();
    const query1 = {
      text: 'SELECT idt FROM thingd',
    };

    return client
      .query(query1)
      .then(res => {
        var exist = 0;
        for (var i = 0; i < res.rows.length; i++) {
          if (res.rows[i].idt == id) {
            exist = 1;
            break;
          }
        }
        if (exist == 0) {
          throw new Error('Errore');
        } else {
          const query = {
            text: 'SELECT td FROM thingd WHERE idt = $1',
            values: [id],
          };

          var td = client
            .query(query)
            .then(res => {
              console.log(res.rows[0]);
              return res.rows[0].td;
            })
            .catch(e => console.error(e.stack));

          return td;
        }
      })
      .finally(() => {
        client.release();
      });
  }

  async retrieveAllTD(): Promise<any> {
    const client = await this.databaseService.connect();
    const query = {
      text: 'SELECT * FROM thingd',
    };
    return client
      .query(query)
      .then(res => {
        var tds: string[];
        tds = [];
        for (var i = 0; i < res.rows.length; i++) {
          tds.push(res.rows[i].td);
        }
        return tds;
      })
      .finally(() => {
        client.release();
      });
  }

  async deleteTD(id: string): Promise<void> {
    const client = await this.databaseService.connect();
    const query = {
      text: 'DELETE FROM thingd WHERE idt= $1',
      values: [id],
    };

    return client
      .query(query)
      .then(res => {
        console.log(res);
      })
      .finally(() => {
        client.release();
      });
  }

  async updateTD(data: any, id: string): Promise<string> {
    var ajv = new Ajv();
    var validate = ajv.compile(schema);

    var valid = validate(data);

    if (!valid) {
      console.log('Invalid: ' + ajv.errorsText(validate.errors));
      throw new Error('Errore');
    }

    const client = await this.databaseService.connect();
    const query = {
      text: 'UPDATE thingd set td= $1 WHERE idt= $2',
      values: [data, id],
    };

    return client
      .query(query)
      .then(res => {
        console.log(res);
        return 'OK';
      })
      .finally(() => {
        client.release();
      });
  }

  async updatePartialTD(data: any, id: string): Promise<string> {
    const client = await this.databaseService.connect();
    const query = {
      text: 'SELECT td FROM thingd WHERE idt = $1',
      values: [id],
    };

    return client
      .query(query)
      .then(res => {
        let td = res.rows[0].td;
        td = mergePatch.apply(td, data);

        var ajv = new Ajv();
        var validate = ajv.compile(schema);

        var valid = validate(td);

        if (!valid) {
          console.log('Invalid: ' + ajv.errorsText(validate.errors));
          throw new Error('Errore');
        }

        console.log('Valid!');

        const query = {
          text: 'UPDATE thingd set td= $1 WHERE idt= $2',
          values: [td, id],
        };

        return client.query(query).then(res => {
          console.log(res);
          return 'OK';
        });
      })
      .finally(() => {
        client.release();
      });
  }

  async existID(id: string): Promise<boolean> {
    const client = await this.databaseService.connect();
    const query = {
      text: 'SELECT idt FROM thingd',
    };

    return client
      .query(query)
      .then(res => {
        var riss = false;
        var exist = 0;
        for (var i = 0; i < res.rows.length; i++) {
          if (res.rows[i].idt == id) {
            exist = 1;
            break;
          }
        }
        if (exist == 0) {
          riss = false;
        } else {
          riss = true;
        }
        return riss;
      })
      .finally(() => {
        client.release();
      });
  }
}
