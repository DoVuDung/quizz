import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    const request = req.clone({
      url: `http://localhost:3000/api/${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request).pipe(retry(1), catchError(this.handleError));
  }



  handleError(error: any) {
    let errorMessage = '';
    // console.log(error.error.Message);
    // if (error.error instanceof ErrorEvent) {
    //   // client-side error
    //   errorMessage = `Error: ${error.error.Message}`;
    // } else {
    //   // server-side error
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    if (error.status == 401) {
      errorMessage = 'Bạn không có quyền thực hiện chức năng này';
    }
    else if (error.status == 500) {
      errorMessage = 'Máy chủ hiện đang lỗi, vui lòng thử lại sau';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
