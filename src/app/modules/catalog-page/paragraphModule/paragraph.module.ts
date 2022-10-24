import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphComponent } from '../paragraph/paragraph.component';
import { CatalogModule } from 'src/app/components/catalog/catalog.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../main-page/main/main.component';

const routes:Routes=[
  {path:'',component:MainComponent}
]

@NgModule({
  declarations: [
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
    CatalogModule,
    RouterModule.forRoot(routes),
  ]
})
export class ParagraphModule { }
