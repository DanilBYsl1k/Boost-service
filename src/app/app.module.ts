import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { StoreBasketComponent } from './components/store-basket/store-basket.component';
import { ParagraphModule } from './modules/catalog-page/paragraphModule/paragraph.module'
import { MainModule } from './modules/main-page/main-module/main.module';
import { CardItemComponent } from './components/card-item/card-item.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoreBasketComponent,
    CardItemComponent,
    OrderComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParagraphModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule
    // CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
