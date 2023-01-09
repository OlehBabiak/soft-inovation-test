import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {MatButtonModule} from '@angular/material/button';
import {ProductListComponent} from './product-list/product-list.component';
import {CreateProductDialogComponent} from './dialogs/create-product-dialog/create-product-dialog.component';
import {RouterLink} from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    CreateProductDialogComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MatButtonModule,
    RouterLink
  ]
})
export class ProductsModule {
}
