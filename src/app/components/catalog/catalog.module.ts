import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from 'src/app/pipes/search.pipe';

const routes:Routes=[
  // {path:":paragpaph",component:AppComponent}
]

@NgModule({
  declarations: [
    CatalogComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[CatalogComponent]
})
export class CatalogModule { }
