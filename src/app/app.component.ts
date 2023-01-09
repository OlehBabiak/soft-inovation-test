import {Component, OnInit} from '@angular/core';
import {AuthService, ProductService} from "./core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private productsService: ProductService) {
  }

  ngOnInit() {
    this.authService.initUsersArr();
    this.authService.autoLogin();
    this.productsService.fetchProducts()
  }
}
