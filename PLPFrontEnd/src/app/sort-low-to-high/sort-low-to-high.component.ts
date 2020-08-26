import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';
import { IProductDetails } from '../iproduct-details';

@Component({
  selector: 'app-sort-low-to-high',
  templateUrl: './sort-low-to-high.component.html',
  styleUrls: ['./sort-low-to-high.component.css']
})
export class SortLowToHighComponent implements OnInit {

  constructor(private service: CapServiceService, public router: Router) { }

  ProductList: IProductDetails[] = [];

  ngOnInit() {
    this.service.getAllProducts().subscribe((data) => {this.ProductList = data, this.sortByLowToHigh();});
  }

  sortByLowToHigh() {
    //this.status = 'lowToHighProd';
    this.ProductList=this.ProductList.sort(function(a,b){
      return a.price-b.price;
     })
  }

}
