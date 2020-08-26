import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.component.html',
  styleUrls: ['./dashboard-customer.component.css']
})
export class DashboardCustomerComponent implements OnInit {

  private myList: string[];
  constructor(private dashboardService:  DashboardServiceService, private router: Router) { }

  ngOnInit() {
  }

  getOrderedItems(){
// //console.log(custId);
//       this.dashboardService.getOrderedItemsByCustId().subscribe(data=> {
//         this.myList=data
        
//       })
     this.router.navigate(['/orderedItems'])
  }
 

}
