import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { Product } from '../product';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Merchant } from '../merchant';
import { Coupon } from '../coupon';
import { CapStoreService } from '../cap-store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
  /* providers:[DashboardComponent] */
})
export class DetailsComponent implements OnInit {


  payment: string;
  product: Product;
  loggedInCustomer: Customer;
  merchant: Merchant;
  constructor(private service: CapStoreService) { }

  ngOnInit() {
  }

  orderedItems(customer: Customer) {
    console.log(this.loggedInCustomer);
    this.service.getProductById(this.service.product.prodId).subscribe(data => {
      this.service.setProductObj(data);
      this.product = this.service.getProductObj();
      this.merchant = this.service.getProductObj().merchant;
      console.log(this.merchant);
      let orderTime = new Date().toLocaleDateString();
      console.log(orderTime);
      let ordstatus = "PLD";
      let shippingAddress = "goa";
    //  let coupon = new Coupon('COUP_00001', 10, []);

    }
    );
  }

  place_order() {
    console.log(this.service.getPaymentMode());
  }
}
