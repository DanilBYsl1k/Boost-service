import { Component, Input, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, } from 'rxjs';
import { Icatalog } from 'src/app/interface/CatalogList.interface';
import { BasketService } from 'src/app/service/basket.service';
import { ListCardService } from 'src/app/service/list-card.service';
import { ParagraphService } from 'src/app/service/paragraph.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  @Input()number:number
  @Input()popular:boolean

  
  constructor(
    private serviceParagraph:ParagraphService,
    private cardsService:ListCardService,
    private param:ActivatedRoute,
    private basketService:BasketService,
    ) {
      
    }
  nameCard:string
  alertAdd:boolean
  cardsList:Icatalog[]
  paragraphs:any
  url:string
  i:Icatalog[]=[]

  input:string
    
  ngOnInit(): void {
    ////
    fromEvent(document, 'input').subscribe((ev:any) => {
      this.input=ev.path[0].value
      console.log(this.input)
    })
    /////
    for(this.number<this.cardsService.CatalogList.length; this.number--;){
      this.i.push(this.cardsService.CatalogList[this.number])
      this.cardsList=this.i
    }
    this.paragraphs=this.serviceParagraph.ParagraphList
    if(this.param.snapshot.children.length<1){
      return
    }else{
      this.url=this.param.snapshot.children[0].params['paragraph']
      this.filter(this.url)
    }
  }
  filter(name:string){
    this.cardsList=this.i
    if(name.includes('All') || name.includes('/')){
      return
    }else{
      this.cardsList=this.cardsList.filter((p)=>p.Paragrafs.toLocaleLowerCase().includes(name.toLowerCase()))
    }
  }
  addCard(card:Icatalog){
    this.basketService.basket.push(card)
    this.nameCard=card.name
    this.alertAdd=true
    setTimeout(() => {
      this.alertAdd=false
    }, 1000);
  }
  
}
