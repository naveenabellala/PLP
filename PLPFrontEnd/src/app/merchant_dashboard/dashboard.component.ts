import { Component, OnInit } from '@angular/core';

import { CapstoreService } from '../capstore.service';
import { Merchant } from '../merchant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  merchant:Merchant;
  constructor(private service:CapstoreService) { }

  ngOnInit() {
    this.merchant=this.service.getMerchant();
  }

}
