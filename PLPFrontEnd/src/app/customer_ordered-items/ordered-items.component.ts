import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { OrderedItem } from '../OrderedItem';

//import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit {

  constructor(private dashboardService: DashboardServiceService) { }
  orderedItemsList: OrderedItem[];

  ngOnInit() {
    this.dashboardService.getOrderedItemsByCustId().subscribe(data => {
      this.orderedItemsList = data;
      this.dashboardService.orders=data;
      console.log(this.dashboardService.orders)
    });
  }
  returnProduct(ordId) {
    console.log("Return good called")
    //updating status 
    //updating product
    //refunding money
    this.dashboardService.returnGoods(ordId).subscribe(data =>{
      if(data===true){
        window.alert('Product return successfull');
      }else{
       window.alert('Product return unsuccessfull');
      }
    },(error: Error) => {
      window.alert(error.message);
    });
    
  }


 

    
  
// }
}
