import { Component, OnInit } from '@angular/core';
import { CapStoreService } from '../../app/cap-store.service';
import { Customer } from '../customer';
import { Product } from '../product';
import { Merchant } from '../merchant';
import { Coupon } from '../coupon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  
  constructor(private service: CapStoreService,private route:Router) { }

  ngOnInit() {
  }

  placeOrder() {
    this.route.navigate(['/invoice']);
  }

}
