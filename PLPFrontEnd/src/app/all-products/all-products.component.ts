import { Component, OnInit } from '@angular/core';

import { IProductDetails } from '../iproduct-details';
import { CapServiceService } from '../cap-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private productDetailsService: CapServiceService) { }

  Products: IProductDetails[];
  ngOnInit() {

    this.productDetailsService.getAllProducts().subscribe(
      data => {
      this.Products = data;
        //this.functionCategory();
      },
      error => console.log(error));

  }

}
