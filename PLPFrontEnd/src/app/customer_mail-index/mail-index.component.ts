import { Component, OnInit } from '@angular/core';
import { Email } from '../Mail';
import { CapstoreService } from '../capstore.service';


@Component({
  selector: 'app-mail-index',
  templateUrl: './mail-index.component.html',
  styleUrls: ['./mail-index.component.css']
})
export class MailIndexComponent implements OnInit {

  maill: Email;

  constructor(private mail:CapstoreService) { }
  
  sendMail(fromm:string,too:string,maildata:string){
    this.maill=new Email();
    this.maill.fromMailId=fromm;
    this.maill.toMailId=too;
    this.maill.mail=maildata;
    console.log(fromm);
    this.mail.sendMail(this.maill).subscribe( data => 
      {
        alert('Mail Sent Successfully!');
    });
  }
  ngOnInit() {
  }

}
