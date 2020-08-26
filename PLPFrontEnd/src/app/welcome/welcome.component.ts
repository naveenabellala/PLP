import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service: CapServiceService) { }

  ngOnInit() {
    
  }

}
