import { Component, OnInit } from '@angular/core';

import { IProductDetails } from '../iproduct-details';
import { CapServiceService } from '../cap-service.service';

@Component({
  selector: 'app-third-party-products',
  templateUrl: './third-party-products.component.html',
  styleUrls: ['./third-party-products.component.css']
})
export class ThirdPartyProductsComponent implements OnInit {

  constructor(private productDetailsService: CapServiceService) { }
  Products: IProductDetails[];
  ngOnInit() {

    this.productDetailsService.getThirdPartyMerchantProducts().subscribe(
      data => {
      this.Products = data;
        //this.functionCategory();
      },
      error => console.log(error));

  }

}
