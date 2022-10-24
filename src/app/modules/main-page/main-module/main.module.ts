import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { CatalogComponent } from 'src/app/components/catalog/catalog.component';
import { CatalogModule } from 'src/app/components/catalog/catalog.module';
import { RouterModule, Routes } from '@angular/router';

// const routes:Routes=[
//   {path:"", component:MainComponent},
// ]

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    CatalogModule,
    // RouterModule.forRoot(routes),
  ],
  exports:[]
})
export class MainModule { }
