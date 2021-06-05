import { MatSnackBar } from '@angular/material/snack-bar';

import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends UtilService{
 
  logar(username: string, password: string): any {

    let usuario = {
      "username" : username,
      "password" : password
    }
    return this.http.post<Observable<boolean>>(this.urlService + 'login', usuario)
    .pipe(map(isValid => {
      if (isValid) {
        window.localStorage.setItem('token', btoa(username + ':' + password));
        window.localStorage.setItem('user', username);
      }
      return isValid;
    }))
    
  }

  public getToken(): string {
    return window.localStorage.getItem('token');
  }
  public getUser(): string {
    return window.localStorage.getItem('user');
  }
  public logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  }

  public isLogeedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,
      'Fechar',
      {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 3000,
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
  }

}
