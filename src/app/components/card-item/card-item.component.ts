import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent  } from 'rxjs';
import { CartParameters } from 'src/app/interface/CartParameters.interface';
import { Icatalog } from 'src/app/interface/CatalogList.interface';
import { BasketService } from 'src/app/service/basket.service';
import { ListCardService } from 'src/app/service/list-card.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  constructor(private route:ActivatedRoute, private basketService:BasketService) { }
  card:Icatalog
  fast:boolean=false
  extra:string=''
  old:string=''
  bosses:string=''
  arrayoldContent:CartParameters[]=[
  
    {
      title:"1-50",
      price:7
    },
    {
      title:"20-50",
      price:9
    },    
    {
      title:"30-50",
      price:25
    },
    {
      title:"71-77",
      price:18
    },    
  ]
  arrayExtraContent:CartParameters[]=[
    {
      title:"Finish Storyline",
      price:7
    },
    {
      title:"Torghast Access",
      price:5
    },    
    {
      title:"Covenant campaign",
      price:9
    },
  ]
  arrayBossesContent:CartParameters[]=[
    {
      title:"Shriekwing",
      price:7
    },
    {
      title:"Hungering Destroyer",
      price:5
    },
    {
      title:"Huntsman Altimor  ",
      price:9
    },    
    {
      title:"Stone Generals ",
      price:25
    },
    {
      title:"Kael’thas Sunstrider",
      price:18
    }
  ]
  
  ngOnInit(): void {
    this.card=this.route.snapshot.data['getCard']
    this.card.parameters.bos.price=this.card.price
    console.log(this.basketService.basket)
  }
  extr(title:string,price:number){
    this.extra=title
    this.card.parameters.extr.title=title
    this.card.parameters.extr.price=price
    this.sumary()
  }
  oldContent(title:any,price:number){
    this.old=title
    this.card.parameters.oldContent.title=title
    this.card.parameters.oldContent.price=price
    // console.log(this.arr)
    this.sumary()
  }
  boss(title:string,price:number){
    this.bosses=title
    this.card.parameters.bos.title=title
    this.card.parameters.bos.price=price
    this.sumary()
  }
  sumary(){

  let result:number=0
  if(this.fast){
    this.card.parameters.fast.price=25
  }else{
    this.card.parameters.fast.price=0
  }
  for (const keys in this.card.parameters) {
    let key=keys as keyof typeof this.card.parameters
    result=result+this.card.parameters[key].price
    // console.log(this.card.parameters[key].price)
    }
    this.card.price=result
  }
  submit(){
    this.basketService.basket.push(this.card)
  }
}
