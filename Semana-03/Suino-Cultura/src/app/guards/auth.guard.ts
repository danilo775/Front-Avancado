import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AutenticaService } from '../services/autentica.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autenticaService: AutenticaService, private router: Router) {}




canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (!this.autenticaService.isLogged()) {
        this.router.navigate(['/login']);
      return false;
    }

    this.autenticaService.isLogged();
    return true;
  }
}

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AutenticaService } from '../services/autentica.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private autenticaService: AutenticaService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.autenticaService.isLogged()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }


