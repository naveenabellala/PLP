import { Component, OnInit } from '@angular/core';

import { CapstoreService } from '../capstore.service';
import { Email } from '../Mail';
import { DashboardServiceService } from '../dashboard-service.service';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  message:string="haii";
  array: Email[];
  constructor(private service:CapstoreService,private customerService: DashboardServiceService) { }

  ngOnInit() {
    let emailId = this.customerService.getCustomer().emailId
    this.service.getMail(emailId).subscribe(data=>this.responseData(data));
  }

  responseData(data){
    this.array=data;
  }
}
