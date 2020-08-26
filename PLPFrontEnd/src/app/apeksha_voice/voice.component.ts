import { Component, OnInit } from '@angular/core';

import { CapStoreService } from '../cap-store.service';
import { OrderedItem } from '../OrderedItem';


@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  dataList: OrderedItem;
  constructor(private service:CapStoreService) { }

  ngOnInit() {
   
   let orderId=this.service.getOrderTransaction().ordItem.ordId;
    this.service.showorder(orderId).subscribe(data=>{
      if(data==null)
      {
        console.error("Problem Generating Invoice");
        
      }
      else{
        this.dataList=data;
      }
    });
  }
}
