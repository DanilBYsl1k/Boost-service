import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Icatalog } from '../interface/CatalogList.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  basket:Icatalog[]=[
    {
      id:9,
      name:"Shadowland Powerleveling",
      price:95,
      Paragrafs:"Shadowlands",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"../../../assets/image/Cards-list/cards 3.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    }
  ]
  endPrice:number=0

  buy=false
}
