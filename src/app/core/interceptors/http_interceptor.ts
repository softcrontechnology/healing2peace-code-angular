
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Inject, Injectable } from '@angular/core';
  import { Store } from '@ngrx/store';
  import * as fromStore from '../../store';
  import { Observable, throwError } from 'rxjs';
  import { catchError, concatMap, map, take } from 'rxjs/internal/operators';
  import { environment } from 'src/environments/environment';
  import { ApiConstants } from '../constants/api-constants';
  @Injectable({
    providedIn: 'root',
  })
  export class BaseHttpInterceptor implements HttpInterceptor {
    constructor(
      @Inject('BASE_API_URL') private baseUrl: string,
      private store: Store<fromStore.State>
    ) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
     
      const apiReq = req.clone({
        url: `${this.baseUrl}/${req.url}`,
        headers: req.headers
          .set('Custom-Key', environment.authKey)
          .set('token', environment.token)
          
      });

      return next.handle(apiReq);
    }
  }
  