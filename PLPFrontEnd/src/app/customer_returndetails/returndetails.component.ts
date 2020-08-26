import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-returndetails',
  templateUrl: './returndetails.component.html',
  styleUrls: ['./returndetails.component.css']
})
export class ReturndetailsComponent implements OnInit {
  // isClosed = false;
  constructor( private dashboardService: DashboardServiceService) { }

  ngOnInit() {
  }
  // returnProduct() {
  //   console.log("Return good called")
  //   //updating status 
  //   //updating product
  //   //refunding money
  //   // this.dashboardService.returnGoods(this.ordId).subscribe(data =>{
  //   //   if(data===true){
  //   //     window.alert('Product return successfull');
  //   //   }else{
  //   //    window.alert('Product return unsuccessfull');
  //   //   }
  //   // },(error: Error) => {
  //   //   window.alert(error.message);
  //   // });
  //   // this.isClosed = true
  // }

}
