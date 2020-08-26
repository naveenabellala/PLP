import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CapStoreService } from '../cap-store.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { OrderedItem } from '../OrderedItem';


@Component({
  selector: 'app-orderplacing',
  templateUrl: './orderplacing.component.html',
  styleUrls: ['./orderplacing.component.css']
})
export class OrderplacingComponent implements OnInit {

  
  constructor(private service:CapStoreService, private router: Router) { }

  orderedItem: OrderedItem;
  discountedAmount: number
  ngOnInit() {
    this.orderedItem = this.service.getOrderedItem();
    this.discountedAmount = (this.orderedItem.product.price * this.orderedItem.ordQty) - this.orderedItem.ordPrice;
  }


  updateShippingAddress(address: string) {
      this.orderedItem.shippingAddress = address
      this.service.storeOrderedItem(this.orderedItem)
  }

  continueOrder() {
    if(this.orderedItem.shippingAddress == undefined || this.orderedItem.shippingAddress.length == 0) {
      this.orderedItem.shippingAddress = this.service.getCustomerObj().address;
      this.service.storeOrderedItem(this.orderedItem)
    } 

    this.router.navigate(["/paymentDashboard"])
  }
}
