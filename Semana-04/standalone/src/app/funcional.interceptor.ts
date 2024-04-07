
import {
  HttpInterceptorFn
} from '@angular/common/http';


  export const HttpTokenInterceptor: HttpInterceptorFn = (req, next) => {
    req = req.clone({
      setHeaders: {
        'Authorization': 'token',
        'Content-Type': 'application/json'
      }
    });
    return next(req);
  }

