const { Client } = require('pg');

let alltd= [
    {
      "title": "TemperatureController",
      "events": {
        "overheat": {
          "forms": [
            {
              "op": "subscribeevent",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "description": "Alert sent when the room temperature is too high"
        }
      },
      "actions": {
        "decrement": {
          "forms": [
            {
              "op": "invokeaction",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "input": {
            "type": "integer",
            "maximum": 5,
            "minimum": 0
          },
          "description": "Decrementing the temperature of the room with 0 to 5 increments"
        },
        "increment": {
          "forms": [
            {
              "op": "invokeaction",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "input": {
            "type": "integer",
            "maximum": 5,
            "minimum": 0
          },
          "description": "Incrementing the temperature of the room with 0 to 5 increments"
        }
      },
      "@context": "https://www.w3.org/2019/wot/td/v1",
      "security": [
        "nosec_sc"
      ],
      "properties": {
        "temperature": {
          "type": "integer",
          "unit": "Celcius",
          "forms": [
            {
              "op": "readproperty",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "readOnly": true,
          "observable": true,
          "description": "Current temperature value"
        }
      },
      "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
      "securityDefinitions": {
        "basic_sc": {
          "scheme": "basic"
        },
        "nosec_sc": {
          "scheme": "nosec"
        }
      }
    },
    {
      "title": "TemperatureController22",
      "events": {
        "overheat": {
          "forms": [
            {
              "op": "subscribeevent",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "description": "Alert sent when the room temperature is too high"
        }
      },
      "actions": {
        "decrement": {
          "forms": [
            {
              "op": "invokeaction",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "input": {
            "type": "integer",
            "maximum": 5,
            "minimum": 0
          },
          "description": "Decrementing the temperature of the room with 0 to 5 increments"
        },
        "increment": {
          "forms": [
            {
              "op": "invokeaction",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "input": {
            "type": "integer",
            "maximum": 5,
            "minimum": 0
          },
          "description": "Incrementing the temperature of the room with 0 to 5 increments"
        }
      },
      "@context": "https://www.w3.org/2019/wot/td/v1",
      "security": [
        "nosec_sc"
      ],
      "properties": {
        "temperature": {
          "type": "integer",
          "unit": "Celcius",
          "forms": [
            {
              "op": "readproperty",
              "href": "mqtt://192.168.1.187:1883/illuminance",
              "contentType": "text/plain"
            }
          ],
          "readOnly": true,
          "observable": true,
          "description": "Current temperature value"
        }
      },
      "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
      "securityDefinitions": {
        "basic_sc": {
          "scheme": "basic"
        },
        "nosec_sc": {
          "scheme": "nosec"
        }
      }
    }
  ];
  
  let td={
    "title": "TemperatureController",
    "events": {
      "overheat": {
        "forms": [
          {
            "op": "subscribeevent",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "description": "Alert sent when the room temperature is too high"
      }
    },
    "actions": {
      "decrement": {
        "forms": [
          {
            "op": "invokeaction",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "input": {
          "type": "integer",
          "maximum": 5,
          "minimum": 0
        },
        "description": "Decrementing the temperature of the room with 0 to 5 increments"
      },
      "increment": {
        "forms": [
          {
            "op": "invokeaction",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "input": {
          "type": "integer",
          "maximum": 5,
          "minimum": 0
        },
        "description": "Incrementing the temperature of the room with 0 to 5 increments"
      }
    },
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "security": [
      "nosec_sc"
    ],
    "properties": {
      "temperature": {
        "type": "integer",
        "unit": "Celcius",
        "forms": [
          {
            "op": "readproperty",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "readOnly": true,
        "observable": true,
        "description": "Current temperature value"
      }
    },
    "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    "securityDefinitions": {
      "basic_sc": {
        "scheme": "basic"
      },
      "nosec_sc": {
        "scheme": "nosec"
      }
    }
  }
  ;

  let newtd= {       
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "TemperatureControllerrrrrrr22",
    "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    "properties": {
        "temperature": {
           "type": "integer",
           "description": "Current temperature value",
           "observable": true,
           "readOnly": true,
           "unit":"Celcius",
           "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "readproperty"
                    }]
        }
    },
    "actions": {
        "increment": {
            "description": "Incrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
                },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
                    }]
        },
        "decrement": {
            "description": "Decrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
            },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
            }]
        }
    },
    "events": {
        "overheat": {
            "description": "Alert sent when the room temperature is too high",
            "forms": [{
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType" : "text/plain",
            "op" : "subscribeevent"
            }]
        }
    },
        "securityDefinitions": {
            "basic_sc": {"scheme": "basic"},
            "nosec_sc": {"scheme": "nosec"}
        },
        "security": ["nosec_sc"]
  };

  let searchtd= [
    {
      "jsonb_path_query": {
        "forms": [
          {
            "op": "invokeaction",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "input": {
          "type": "integer",
          "maximum": 5,
          "minimum": 0
        },
        "description": "Decrementing the temperature of the room with 0 to 5 increments"
      }
    },
    {
      "jsonb_path_query": {
        "forms": [
          {
            "op": "invokeaction",
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType": "text/plain"
          }
        ],
        "input": {
          "type": "integer",
          "maximum": 5,
          "minimum": 0
        },
        "description": "Decrementing the temperature of the room with 0 to 5 increments"
      }
    }
  ];
  
  let partialtd= {    
    "properties": {
    "temperature": {
       "unit":"F"
  }
  }
  };

  let wrongtd=  {       
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "TemperatureController22",
    "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    "properties": {
        "temperature": {
           "type": "integer",
           "description": "Current temperature value",
           "observable": true,
           "readOnly": true,
           "unit":"Celcius",
           "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "readproperty"
                    }]
        }
    },
    "actions": {
        "increment": {
            "description": "Incrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
                },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
                    }]
        },
        "decrement": {
            "description": "Decrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
            },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
            }]
        }
    },
    "events": {
        "overheat": {
            "description": "Alert sent when the room temperature is too high",
            "forms": [{
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType" : "text/plain",
            "op" : "subscribeevent"
            }]
        }
    }
  };



async function initializeDB(){

let td={       
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "TemperatureController",
    "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    "properties": {
        "temperature": {
           "type": "integer",
           "description": "Current temperature value",
           "observable": true,
           "readOnly": true,
           "unit":"Celcius",
           "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "readproperty"
                    }]
        }
    },
    "actions": {
        "increment": {
            "description": "Incrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
                },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
                    }]
        },
        "decrement": {
            "description": "Decrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
            },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
            }]
        }
    },
    "events": {
        "overheat": {
            "description": "Alert sent when the room temperature is too high",
            "forms": [{
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType" : "text/plain",
            "op" : "subscribeevent"
            }]
        }
    },
        "securityDefinitions": {
            "basic_sc": {"scheme": "basic"},
            "nosec_sc": {"scheme": "nosec"}
        },
        "security": ["nosec_sc"]
};

let td2={       
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "title": "TemperatureController22",
    "description": "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    "properties": {
        "temperature": {
           "type": "integer",
           "description": "Current temperature value",
           "observable": true,
           "readOnly": true,
           "unit":"Celcius",
           "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "readproperty"
                    }]
        }
    },
    "actions": {
        "increment": {
            "description": "Incrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
                },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
                    }]
        },
        "decrement": {
            "description": "Decrementing the temperature of the room with 0 to 5 increments",
            "input":{
                "type": "integer",
                "minimum": 0,
                "maximum": 5
            },
            "forms": [{
                "href": "mqtt://192.168.1.187:1883/illuminance",
                "contentType" : "text/plain",
                "op" : "invokeaction"
            }]
        }
    },
    "events": {
        "overheat": {
            "description": "Alert sent when the room temperature is too high",
            "forms": [{
            "href": "mqtt://192.168.1.187:1883/illuminance",
            "contentType" : "text/plain",
            "op" : "subscribeevent"
            }]
        }
    },
        "securityDefinitions": {
            "basic_sc": {"scheme": "basic"},
            "nosec_sc": {"scheme": "nosec"}
        },
        "security": ["nosec_sc"]
};


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
    .catch(err => console.error('connection error', err.stack));


  await  client.query('DROP TABLE  IF EXISTS thingd');
  await client.query('CREATE TABLE thingd (idt serial PRIMARY KEY,td jsonb NOT NULL)');

   const query = {
    text: 'INSERT INTO thingd(td) VALUES($1)  RETURNING idt',
    values: [td]
}

await client.query(query);

const query2 = {
    text: 'INSERT INTO thingd(td) VALUES($1)  RETURNING idt',
    values: [td2]
}

await client.query(query2);
 client.end();
}

module.exports ={ initializeDB, alltd, td, newtd, searchtd, partialtd, wrongtd}