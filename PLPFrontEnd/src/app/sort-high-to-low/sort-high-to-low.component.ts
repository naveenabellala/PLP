import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';
import { IProductDetails } from '../iproduct-details';

@Component({
  selector: 'app-sort-high-to-low',
  templateUrl: './sort-high-to-low.component.html',
  styleUrls: ['./sort-high-to-low.component.css']
})
export class SortHighToLowComponent implements OnInit {

  constructor(private service: CapServiceService, public router: Router) { }

  ProductList: IProductDetails[] = [];
  ngOnInit() {
    this.service.getAllProducts().subscribe((data) => {this.ProductList = data, this.sortByHighToLow();});
    
  }

  sortByHighToLow() {
    //this.status = 'highToLowProd';
    this.ProductList=this.ProductList.sort(function(a,b){
      //console.log("hiii");
      return b.price-a.price;
     })
  }

}
