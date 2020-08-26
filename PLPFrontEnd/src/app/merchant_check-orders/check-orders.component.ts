import { Component, OnInit } from '@angular/core';
import { CapstoreService } from '../capstore.service';
import { OrderedItem } from '../OrderedItem';

@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.css']
})
export class CheckOrdersComponent implements OnInit {

  orderedItems:any;
  constructor(private service:CapstoreService) { }

  ngOnInit() {
    this.service.getMerchantOrders(this.service.getMerchant().merId).subscribe(data=>{
      this.orderedItems=data;
    });
  }

}
