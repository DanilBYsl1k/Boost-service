import { Component, DoCheck, OnInit } from '@angular/core';
import { Icatalog } from 'src/app/interface/CatalogList.interface';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-store-basket',
  templateUrl: './store-basket.component.html',
  styleUrls: ['./store-basket.component.scss']
})
export class StoreBasketComponent implements OnInit {

  constructor(private basketService:BasketService) { }
  basket:Icatalog[]
  lenth:number
  endPrice:number=0
  ngOnInit(): void {
    this.basket=this.basketService.basket
    this.lenth=this.basket.length
    this.allCount()
  }
  removeCard(id:Icatalog){
    let indx=this.basket.indexOf(id)
    this.basket.splice(indx,1)
    this.lenth=this.basket.length
    console.log(id.price)
    this.allCount()
  }
  // ngDoCheck(){
  //   this.allCount()
  // }
  allCount(){
    this.endPrice=0
    for(let key in this.basket){
      this.endPrice=this.endPrice+this.basket[key].price
    }
    this.basketService.endPrice=this.endPrice
  }
  buy(){
    this.basketService.buy=true
  }
}
