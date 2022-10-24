import { Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  ngDoCheck(): void {
    this.url=this.route.url
  }
  ngOnInit(): void {
    
  }
  addBgcOverlay(){
    this.bgcEffect.emit()
  }
  dontBuy(){
    this.basketService.buy=false
  }
}
