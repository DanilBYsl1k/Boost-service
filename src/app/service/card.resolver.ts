import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Icatalog } from '../interface/CatalogList.interface';
import { ListCardService } from './list-card.service';

@Injectable({
  providedIn: 'root'
})
export class CardResolver implements Resolve<Icatalog> {
  constructor(private listCardService:ListCardService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Icatalog>|any{
    return  this.listCardService.getById(route.params['id'])
  }
}
