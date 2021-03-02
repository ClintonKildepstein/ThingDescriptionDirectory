import { Injectable } from '@nestjs/common';
export type User = {
  userId:string,
  username:string,
  password:string
};
const { Client } = require('pg')

@Injectable()
export class UsersService {

  getUser(username:string): User{
    const client = this.connectDB();
    const query = {
      text: 'SELECT * FROM account where username=$1',
      values: [username]
  }
  var acc = client
      .query(query)
      .then(res => {
        var user: User={ userId:"id", username:"user",password:"pass"};
        if (res.rows.length==0){
          return undefined;
        } else{
         user.userId= res.rows[0].ida;
         user.username=res.rows[0].username;
         user.password=res.rows[0].passw;
          return user;}
      })
      .catch(e => console.error(e.stack))
      .finally(() => { client.end() })

  return acc;
    }

  async registerUser(data): Promise<any>{
    var user= data["username"];
    var pass=data["password"];
   
    var checkuser= await this.getUser(user);
    console.log(checkuser);
    
    if (checkuser!=undefined){
      throw new Error("Errore");
    } else {
      const client = this.connectDB();
    const query = {
        text: 'INSERT INTO account(username,passw) VALUES($1,$2)  RETURNING ida',
        values: [user,pass],
    }

   var ris = client
        .query(query)
        .then(res => {
          console.log(res.rows[0].ida);
            return res.rows[0].ida;
        })
        .catch(e => console.error(e.stack))
        .finally(() => { client.end() })
    return ris;
      }
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

  async findOne(username: string): Promise<User | undefined> {
    var user= this.getUser(username); 
    if (user==null){
      return undefined;
    }
    return user; 
  }
}