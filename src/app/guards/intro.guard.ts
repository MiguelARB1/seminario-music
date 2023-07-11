import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  
  constructor(private storage:Storage){}
  canActivate(){
   console.log("paso por la seguridad");
    return false;
  }
  
}
