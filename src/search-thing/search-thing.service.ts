import { Injectable } from '@nestjs/common';
const { Client } = require('pg');


@Injectable()
export class SearchThingService {

    searchTD(queryJP): any {
        const client = this.connectDB();
        const query = {
            text: 'SELECT jsonb_path_query(td, $1) FROM thingd',
            values: [queryJP]
        }
        var ris = client
            .query(query)
            .then(res => {
                if (res.rows.length==0){
                        throw new Error("Errore");
                }
                return res.rows;
                //console.log(res.rows);
            })
            .catch(e => console.error(e.stack))
            .finally(() => { client.end() })
        return ris;
    }


    connectDB(): any {

        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'ThingDirectory',
            password: 'ciaociao',
            port: 5432,
        })
        client
            .connect()
            .then(() => console.log('connected'))
            .catch(err => console.error('connection error', err.stack))
        return client;
    }

}
