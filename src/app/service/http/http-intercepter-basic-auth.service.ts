import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let username = 'in28minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders : {
          Authorization : basicAuthHeaderString
        }
      }) 
      return next.handle(request);
  }
  
  


}
