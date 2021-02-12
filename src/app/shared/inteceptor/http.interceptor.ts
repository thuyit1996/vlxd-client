import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const excludedUrl = [
      `${environment.API_ENDPOINT}/token`,
      `${environment.API_ENDPOINT}/api/account/register`,
    ];
    if (excludedUrl.some(x => x === request.url)) {
      return next.handle(request);
    }
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(handleError(error));
      }));
  }
}

const handleSuccess = (response: any): any => {
  if (response.status >= 200 && response.status < 300) {
    return response.body
  } else {
    return response.body?.message || 'Có lỗi xảy ra, vui lòng thử lại sau'
  }
}


const handleError = (response: any): any => {
  return response?.body?.message || 'Có lỗi xảy ra, vui lòng thử lại sau'
}