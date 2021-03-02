import { Injectable } from '@nestjs/common';
import { DatabaseService } from './../database.service';
export type User = {
  userId:string,
  username:string,
  password:string
};

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getUser(username:string): Promise<User>{
    const client = await this.databaseService.connect();
    const query = {
      text: 'SELECT * FROM account where username=$1',
      values: [username]
  }
  return client
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
      .finally(() => { client.release() })
    }

  async registerUser(data): Promise<any>{
    var user= data["username"];
    var pass=data["password"];
   
    var checkuser= await this.getUser(user);
    console.log(checkuser);
    
    if (checkuser!=undefined){
      throw new Error("Errore");
    } 

      const client = await this.databaseService.connect()
    const query = {
        text: 'INSERT INTO account(username,passw) VALUES($1,$2)  RETURNING ida',
        values: [user,pass],
    }

   return client
        .query(query)
        .then(res => {
          console.log(res.rows[0].ida);
            return res.rows[0].ida;
        })
        .catch(e => console.error(e.stack))
        .finally(() => { client.release() })
      
  }

  async findOne(username: string): Promise<User | undefined> {
    var user= this.getUser(username); 
    if (user==null){
      return undefined;
    }
    return user; 
  }
}