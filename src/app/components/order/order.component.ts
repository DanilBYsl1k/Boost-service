import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icatalog } from 'src/app/interface/CatalogList.interface';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private basketService:BasketService) { }
  form:FormGroup
  listBasket:Icatalog[]
  endPrice:number=0
  ngOnInit(): void {
    this.listBasket=this.basketService.basket
    this.endPrice=this.basketService.endPrice
    this.form=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      batleTag:new FormControl('',[Validators.required]),
      Messenger:new FormControl('',[Validators.required]),
      notes:new FormControl('')
    })
    ///
    

  }
  onSubmitOrder(){
    console.log(this.form.value)
  }
}
