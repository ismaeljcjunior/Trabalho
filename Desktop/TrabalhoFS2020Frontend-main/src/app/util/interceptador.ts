import { AutenticacaoService } from './../service/autenticacao.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class Interceptador implements HttpInterceptor {

    constructor(private serviceAuth: AutenticacaoService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {
        const token = this.serviceAuth.getToken();
        if(token){
            const xhr = req.clone({
                headers: req.headers.set('authorization', `Basic ${token}`)
            });
            return next.handle(xhr);
        }else 
            return next.handle(req);
    }
}

