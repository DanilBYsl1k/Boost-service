import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BasketService } from '../service/basket.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private basketService:BasketService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.basketService.buy){
      this.router.navigate(['/']);
      throwError(()=>new Error('Failed buy'))
      return false;
    }
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.basketService.buy){
        return true;
      }
      return false;
  }
  
}
