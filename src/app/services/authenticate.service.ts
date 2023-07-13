import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

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

}
