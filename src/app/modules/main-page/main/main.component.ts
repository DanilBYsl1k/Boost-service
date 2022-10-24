import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  popular:boolean=true
  number:number=6
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.route.navigate(['categories'])
  }
}
