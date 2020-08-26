import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';

import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(private capService: CapServiceService, public router: Router, private customerService: DashboardServiceService) { }

  ngOnInit() {
  }

  loginCustomer(custEmail: string,password: string) {
       this.capService.loginCustomer(custEmail,password).subscribe((customer) => {
          console.log(customer);
          this.customerService.setCustomer(customer);
          this.router.navigate(['/homepage']);
       })

      


  }


}
