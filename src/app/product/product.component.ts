import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pageTitle = 'Product List'
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;

  _listFilter: string;
  errorMessage: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];
  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit() {

    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List: ' + message;
  }
}
