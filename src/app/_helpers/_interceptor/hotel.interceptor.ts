import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HotelInterceptor implements HttpInterceptor {

  apiKey:string = 'taecHelmCkhO5q9QdKZYFmNcCh6YeQ';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    // const authReq = request.clone({ headers });
    // return next.handle(authReq);
   
    let setHeader = request.clone({
      setHeaders:{
        // Authorization: `${this.apiKey}`
        'REPLIERS-API-KEY': `${this.apiKey}`,
        'content-type': 'application/json'
      }
    })
    return next.handle(setHeader);
  }
}
