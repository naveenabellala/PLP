import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CapstoreService } from '../capstore.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers:Customer[];
  constructor(private service:CapstoreService) { }

  ngOnInit() {
    this.service.getMerchantCustomers().subscribe(data=>{
      this.customers=data;
    });
  }

}
