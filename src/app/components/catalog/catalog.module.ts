import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { AlertBuyComponent } from '../alert-buy/alert-buy.component';

const routes:Routes=[
  // {path:":paragpaph",component:AppComponent}
]

@NgModule({
  declarations: [
    CatalogComponent,
    SearchPipe,
    AlertBuyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[CatalogComponent,AlertBuyComponent]
})
export class CatalogModule { }
