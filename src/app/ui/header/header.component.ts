import { Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icatalog } from 'src/app/interface/CatalogList.interface';
import { BasketService } from 'src/app/service/basket.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck{
  @Output() bgcEffect=new EventEmitter<boolean>()

  constructor(private route:Router, private basketService:BasketService) { }
  url=''
  phoneNav=false
  basketLng:Icatalog[]=this.basketService.basket
  ngDoCheck(): void {
    this.url=this.route.url
  }
  ngOnInit(): void {
    // this.basketLng=this.basketService.basket.length
  }
  addBgcOverlay(){
    this.bgcEffect.emit()
  }
  dontBuy(){
    this.basketService.buy=false
  }
}
