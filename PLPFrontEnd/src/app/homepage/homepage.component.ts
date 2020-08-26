import { Component, OnInit } from '@angular/core';

import { IProductDetails } from '../iproduct-details';
import { CapServiceService } from '../cap-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private productDetailsService: CapServiceService) { }

  Products: IProductDetails[];
  ProductValue: any;
  ProductKey: any;
  ProductCategory: IProductDetails;
  Category: string[] = [];
  uniqueItems: any;
  ProductCatMob: IProductDetails[];
  ProductCatLap: IProductDetails[];
  ProductCatTv: IProductDetails[];
  

  ngOnInit() {
    this.productDetailsService.getAllProducts().subscribe(
      data => {
      this.Products = data;
        this.functionCategory();
      },
      error => console.log(error));
  }

  functionCategory() {

    console.log(this.Products);

    for (var i = 0; i < this.Products.length; i++) {

      //console.log(this.Products[3].productPrice);
      this.Category.push(this.Products[i].prodCategory);
      console.log(this.Category[i]);

    }

    this.uniqueItems = Array.from(new Set(this.Category));
    console.log(this.uniqueItems[0]);


    var j = 0;
    var ProductsAccordingCategory = {};

    for (var i = 0; i < this.uniqueItems.length; i++) {
      ProductsAccordingCategory[this.uniqueItems[i]] = new Array();
      for (var j = 0; j < this.Products.length; j++) {
        if (this.uniqueItems[i] === this.Products[j].prodCategory) {
          
          ProductsAccordingCategory[this.uniqueItems[i]].push(this.Products[j]);
        }
      }

    }

    console.log(ProductsAccordingCategory);
  
  }
}
