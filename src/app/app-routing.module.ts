import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreBasketComponent } from './components/store-basket/store-basket.component';
import { OrderGuard } from './guard/order.guard';
import { ParagraphComponent } from './modules/catalog-page/paragraph/paragraph.component';
import { MainComponent } from './modules/main-page/main/main.component';
import { CardResolver } from './service/card.resolver';

const routes: Routes = [
  {path:'store-basket', component:StoreBasketComponent},
  {path:'store-basket/order', component:OrderComponent, canActivate:[OrderGuard], canDeactivate:[OrderGuard]},
  {path:'categories',component:ParagraphComponent, children:[
    {path:':paragraph', component:ParagraphComponent}
  ]},
  {path:'', component:MainComponent,children:[
    {path:':paragraph', component:ParagraphComponent}
  ]},
  {path:':paragraph/cards/:id', component:CardItemComponent, resolve:{getCard:CardResolver}},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
