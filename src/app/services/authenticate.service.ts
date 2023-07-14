import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(

    private storage:Storage
  ) { }

  loginUser(credentials:any){

    return new Promise((accept,reject)=>{
      if(
        credentials.email== "miguel@conti.com"&&
        credentials.password=="1234567")
        {
          accept("Login exitoso")
        }else{
          reject("Verifique los datos")
        }

      
    })
  }


  registerUser(userData:any){
    userData.password = btoa(userData.password);
   return this.storage.set("user",userData);
  }
}
