import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
product : IProduct;
pageTitle = "Detail";
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
   
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.product = {
      "productId": id,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
      }
  }

  onBack() {
    this.router.navigate(['/product']);
  }

}
