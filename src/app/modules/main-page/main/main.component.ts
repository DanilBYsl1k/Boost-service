import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  popular:boolean=true
  number:number=6
  constructor(private route:Router) { }
  redirect(){
    this.route.navigate(['categories'])
  }
}
