import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  page:string
  booleanOverlay:boolean=false
  constructor(private params:Router){
  }
  ngDoCheck(): void {
    this.page=this.params.url
  }
  addBgcOverlay(){
    if(this.booleanOverlay){
      this.booleanOverlay=false
    }else{
      this.booleanOverlay=true
    }
  } 
}
