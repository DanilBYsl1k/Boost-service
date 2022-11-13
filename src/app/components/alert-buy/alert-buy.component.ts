import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-buy',
  templateUrl: './alert-buy.component.html',
  styleUrls: ['./alert-buy.component.scss']
})
export class AlertBuyComponent{
  @Input()nameCard:string

  @Input('activeModal')activeModal:boolean
  constructor() { }

}
