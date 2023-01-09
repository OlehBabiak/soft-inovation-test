import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IProduct, ProductService} from '../../../core';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CreateProductDialogComponent} from '../dialogs/create-product-dialog/create-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products!: IProduct[];
  private subscription!: Subscription;
  displayedColumns: string[] = ['id', 'name', 'shortDesc', 'price', 'link', 'actions'];
  dataSource!: MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.productsChanged
      .subscribe((products: IProduct[] | null) => {
        this.products = products as IProduct[];
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onProductUpdate(product: IProduct) {
    this.productService.isCreateMode.next(false);
    const dialogRef = this.dialog.open(CreateProductDialogComponent, {data: product});
    dialogRef.afterClosed()
  }

  onProductDelete(id: number) {
    this.productService.deleteProduct(id)
  }

  onDetailsShow(product: IProduct) {
    this.router.navigate([product.id],
      {
        relativeTo: this.route,
        state: product
      })
  }
}
