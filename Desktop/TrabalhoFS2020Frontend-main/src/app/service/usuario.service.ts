import { MatSnackBar } from '@angular/material/snack-bar';

import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService extends UtilService {
 
  cadastrarUsuario(data: any): any {

    return this.http.post<Observable<any>>(this.urlService + 'usuarios', data)

  }
}
