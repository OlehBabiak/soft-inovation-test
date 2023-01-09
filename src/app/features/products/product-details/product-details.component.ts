import {Component, OnInit} from '@angular/core';
import {IProduct, ProductService} from '../../../core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: IProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.product = this.productService.getProductByID(id);
    })
  }

}
