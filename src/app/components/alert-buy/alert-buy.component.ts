import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-buy',
  templateUrl: './alert-buy.component.html',
  styleUrls: ['./alert-buy.component.scss']
})
export class AlertBuyComponent implements OnInit {
  @Input()nameCard:string

  @Input('activeModal')activeModal:boolean
  constructor() { }
  ngOnInit(): void {
  }

}
