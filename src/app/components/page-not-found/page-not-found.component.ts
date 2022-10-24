import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, interval,  Subscription, } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit , OnDestroy{

  constructor(private route:Router) { }
  subscription:Subscription
  alert=new Observable((sub)=>{
    sub.error('page not found, return page back')
  })
  ngOnInit(): void {
    this.subscription=interval(1000).pipe(delay(5000)).subscribe(
      (data:number)=>{
        console.log(data)
        if(data==10){
          this.route.navigate(['/'])
        }
      }
    )
    this.alert.pipe().subscribe(
      (obs)=>{console.log(obs)}),
      (err:any)=>{
        console.log(err)}
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
