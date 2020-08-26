import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Cartlist } from '../cartlist';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor(private service:DashboardServiceService) { }

  cartlist:Cartlist[];
  ngOnInit() {
    this.service.getCartProducts().subscribe(data => {
      this.cartlist = data;
      console.log(this.cartlist);
      });
  }
  deleteFromCart(cartId) {
    if (confirm("Are you Sure to REMOVE??")) {
    this.service.deleteFromCart(cartId).subscribe(data => {
    this.cartlist = data;
    });
    }
    }

}
