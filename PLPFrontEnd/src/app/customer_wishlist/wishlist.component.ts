import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { WishItem } from '../wishitem';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist: WishItem[];
  constructor(private service: DashboardServiceService) { }

  ngOnInit() {
    this.service.getCustomerWish().subscribe(data => {
      this.wishlist = data;
      console.log(this.wishlist);
    });
  }

  addToCart(wish) {
    //add to cart code
    this.service.addWishTocart(wish.wishedProduct).subscribe();
    this.deleteFromCart(wish.wishId);
  }

  deleteFromCart(wishId) {
    this.service.deleteCustomerWish(wishId).subscribe(data => {
      this.wishlist = data;

    });
  }

}