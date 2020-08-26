import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  customer: Customer;

  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit() {

  }
  saveAttributes(firstName: string,lastName: string,address: string,phoneNo: number){
    this.customer= new Customer()
    
    this.customer.firstName = firstName
    this.customer.lastName = lastName
    this.customer.address = address
    this.customer.phoneNo = phoneNo.toString();
    this.dashboardService.setProfileAttributes(this.customer).subscribe(data=>{
      alert("Profile updated")
    });
  }

  


}
