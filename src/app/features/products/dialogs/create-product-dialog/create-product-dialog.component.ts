import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct, ProductService} from "../../../../core";
import {Subscription} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CONTAIN_LINK_PATTERN} from "../../../../shared/constants/constants";

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent implements OnInit, OnDestroy {

  createProductForm!: FormGroup;
  isCreateMode!: boolean;
  private subscription!: Subscription;

  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.isCreateMode
      .subscribe({
        next: (value) => {
          this.isCreateMode = value
        }
      })

    if (this.isCreateMode) {
      this.createProductForm = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required]),
        shortDesc: new FormControl(null, [Validators.required]),
        longDescription: new FormControl(null, [Validators.required]),
        link: new FormControl(null, [Validators.required, Validators.pattern(CONTAIN_LINK_PATTERN)])
      })
    }
    this.createProductForm = new FormGroup({
      name: new FormControl(this.data?.name, [Validators.required]),
      price: new FormControl(this.data?.price, [Validators.required]),
      shortDesc: new FormControl(this.data?.shortDesc, [Validators.required]),
      longDescription: new FormControl(this.data?.longDescription, [Validators.required]),
      link: new FormControl(this.data?.link, [Validators.required, Validators.pattern(CONTAIN_LINK_PATTERN)])
    })
  }

  onSubmit() {
    if (!this.createProductForm.valid) {
      return
    }
    if (this.isCreateMode) {
      this.productService.addProduct(this.createProductForm.value)
    } else {
      const newProduct = {...this.createProductForm.value, id: this.data.id}
      this.productService.updateProduct(this.data.id, newProduct)
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
