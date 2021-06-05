import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  protected urlService = "http://localhost:8080/";
  
  constructor( protected http: HttpClient,
    protected snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
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
