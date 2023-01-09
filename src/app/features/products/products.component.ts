import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateProductDialogComponent} from "./dialogs/create-product-dialog/create-product-dialog.component";
import {ProductService} from "../../core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
  }

  onProductCreate() {
    this.productService.isCreateMode.next(true);
    const dialogRef = this.dialog.open(CreateProductDialogComponent);
    dialogRef.afterClosed()
  }
}
