import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService:AuthServiceService){}
  routeAdmin:boolean=true
  
  canActivate():boolean{
    if(this.authService.loginButton==false){
        return true; //change to false;
    }
    else{
      return true;
    }
  }
  
}
