import { Injectable } from '@nestjs/common';
var Ajv = require('ajv');
const { Client } = require('pg')
//importo come file locale .. eliminato formato iri
import * as schema from './jsonschema.json';
const mergePatch = require("json-merge-patch");

@Injectable()
export class ThingdirectoryService {

    createTD(data: any): string {
       // console.log(data);
        var ajv = new Ajv();
        var validate = ajv.compile(schema);
        var valid = validate(data);
        var ris;
        if (valid) {
            //console.log('Valid!');
            const client = this.connectDB();
            const query = {
                text: 'INSERT INTO thingd(td) VALUES($1)  RETURNING idt',
                values: [data],
            }

            ris = client
                .query(query)
                .then(res => {
                    //console.log(res.rows[0].idt);
                    return res.rows[0].idt;
                })
                .catch(e => console.error(e.stack))
                .finally(() => { client.end() })
            return ris;
        }
        else {
            console.log('Invalid: ' + ajv.errorsText(validate.errors));
            throw new Error("Errore");
        }

    }

    retrieveTD(id: string): string {
        const client = this.connectDB();
        const query1 = {
            text: 'SELECT idt FROM thingd',
        }

        var ris = client
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
                    throw new Error("Errore");
                }
                else {
                    const query = {
                        text: 'SELECT td FROM thingd WHERE idt = $1',
                        values: [id],
                    }

                    var td = client
                        .query(query)
                        .then(res => {
                            console.log(res.rows[0]);
                            return res.rows[0].td;
                        })
                        .catch(e => console.error(e.stack))

                    return td;
                }
            })

            .catch(e => console.error(e.stack))
            .finally(() => { client.end() })

        return ris;
    }

    retrieveAllTD(): any {
        const client = this.connectDB();
        const query = {
            text: 'SELECT * FROM thingd',
        }
        var td = client
            .query(query)
            .then(res => {
                var tds: string[];
                tds = [];
                for (var i = 0; i < res.rows.length; i++) {
                    tds.push(res.rows[i].td);
                }
                return tds;
            })
            .catch(e => console.error(e.stack))
            .finally(() => { client.end() })

        return td;
    }

    deleteTD(id: string) {

        const client = this.connectDB();
        const query = {
            text: 'DELETE FROM thingd WHERE idt= $1',
            values: [id],
        }

        client
            .query(query)
            .then(res => {
                console.log(res)
            })
            .catch(e => console.error(e.stack))
            .finally(() => { client.end() })

    }

    updateTD(data: any, id: string): string {

        var ajv = new Ajv();
        var validate = ajv.compile(schema);

        var valid = validate(data);
        var ris;
        if (valid) {
            console.log('Valid!');

            const client = this.connectDB();
            const query = {
                text: 'UPDATE thingd set td= $1 WHERE idt= $2',
                values: [data, id]
            }

            ris = client
                .query(query)
                .then(res => {
                    console.log(res)
                    return "OK";
                })
                .catch(e => console.error(e.stack))
                .finally(() => { client.end() })
        }
        else {
            console.log('Invalid: ' + ajv.errorsText(validate.errors));
            throw new Error("Errore");
        } return ris;
    }


   updatePartialTD(data: any, id: string): string {

        const client = this.connectDB();
        const query = {
            text: 'SELECT td FROM thingd WHERE idt = $1',
            values: [id],
        }

        var ris = "";
        ris = client
            .query(query)
            .then(res => {
                let td = res.rows[0].td;
                td = mergePatch.apply(td, data);

                var ajv = new Ajv();
                var validate = ajv.compile(schema);

                var valid = validate(td);
                let riss = "";
                if (valid) {
                    console.log('Valid!');

                    const query = {
                        text: 'UPDATE thingd set td= $1 WHERE idt= $2',
                        values: [td, id]
                    }

                    riss = client
                        .query(query)
                        .then(res => {
                            console.log(res)
                            return "OK";
                        })
                        .catch(e => console.error(e.stack))
                }
                else {
                    console.log('Invalid: ' + ajv.errorsText(validate.errors));
                    throw new Error("Errore");
                }
                return riss;
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

    existID(id: string): boolean {

        const client = this.connectDB();
        const query = {
            text: 'SELECT idt FROM thingd',
        }

        var ris = client
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
                } else { riss = true; }
                return riss;
            })
            .catch(e => console.error(e.stack))
            .finally(() => { client.end() })


        return ris;
    }

}
