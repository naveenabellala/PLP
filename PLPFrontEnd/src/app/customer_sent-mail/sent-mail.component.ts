import { Component, OnInit } from '@angular/core';
import { Email } from '../Mail';
import { CapstoreService } from '../capstore.service';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  message:string="haii";
  array: Email[];
  constructor(private mail:CapstoreService,private customerService: DashboardServiceService) { }

  ngOnInit() {
    let emailId = this.customerService.getCustomer().emailId
    this.mail.getMail(emailId).subscribe(data=>this.responseData(data));
  }

  responseData(data){
    this.array=data;
  }
}
