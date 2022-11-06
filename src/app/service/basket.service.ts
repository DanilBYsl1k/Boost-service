import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Icatalog } from '../interface/CatalogList.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  basket:Icatalog[]=[

  ]
  endPrice:number=0

  buy=false
}
