import { Component, OnInit } from '@angular/core';
import { Email } from '../Mail';
import { CapstoreService } from '../capstore.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  array: Email[];
  constructor(private service:CapstoreService) { }

  ngOnInit() {
    this.service.getInbox().subscribe(data=>this.responseData(data));
  }

  responseData(data){
    this.array=data;
  }

}
