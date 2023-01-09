import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IProduct} from '../../interfaces';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsChanged = new BehaviorSubject<IProduct[] | null>(null);
  isCreateMode = new BehaviorSubject<boolean>(true);
  private products: IProduct[] = [];

  constructor() {
  }

  addProduct(product: IProduct) {
    product.id = uuidv4()
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products))
    this.productsChanged.next(this.products.slice())
  }

  updateProduct(id: number, newProduct: IProduct) {
    const index = this.products.findIndex(prod => prod.id === id);
    this.products[index] = newProduct;
    localStorage.setItem('products', JSON.stringify(this.products))
    this.productsChanged.next(this.products.slice())
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(prod => prod.id === id);
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products))
    this.productsChanged.next(this.products.slice())
  }

  getProductByID(id: number) {
    const index = this.products.findIndex(prod => prod.id === id);
    return this.products[index]
  }

  fetchProducts() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productsChanged.next(this.products.slice())
  }
}
