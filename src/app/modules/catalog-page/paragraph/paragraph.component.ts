import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCardService } from 'src/app/service/list-card.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit, DoCheck {
  popular:boolean=false
  activeClass:any[]
  constructor(private cardsService:ListCardService,   private param:ActivatedRoute,) {
  }
  number:number
  ngOnInit(): void {

    this.number=this.cardsService.CatalogList.length
  }
  ngDoCheck(): void {
    this.activeClass=this.param.snapshot.children
  }
}
