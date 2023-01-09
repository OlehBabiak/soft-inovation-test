import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
  },
  {path: ':id', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule {
}
