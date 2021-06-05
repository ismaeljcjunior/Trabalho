import { AutenticacaoService } from './../service/autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(private router : Router,
    private serviceAuth : AutenticacaoService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      
      if(this.serviceAuth.isLogeedIn()){
        return true;
      }else{
        this.router.navigate(['login']); 
        return false;
      }
    }
  
}
