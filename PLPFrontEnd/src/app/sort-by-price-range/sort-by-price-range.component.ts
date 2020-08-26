import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';
import { IProductDetails } from '../iproduct-details';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort-by-price-range',
  templateUrl: './sort-by-price-range.component.html',
  styleUrls: ['./sort-by-price-range.component.css']
})
export class SortByPriceRangeComponent implements OnInit {

  constructor(private service: CapServiceService, public router: Router) { }

 ProductList: IProductDetails[];
  ngOnInit() {
    console.log(this.service.getLowRange());
    this.service.getProductsByRange(this.service.getLowRange(), this.service.getHighRange()).subscribe(data => this.ProductList = data);
  }

  sortByLowToHigh() {
    this.ProductList = this.ProductList.sort(function (a, b) {
      return a.price - b.price;
    })
  }
  sortByHighToLow() {
    this.ProductList = this.ProductList.sort(function (a, b) {
      return b.price - a.price;
    })
  }
  sortByViews() {
    this.ProductList = this.ProductList.sort(function (a, b) {
      return b.viewsCount - a.viewsCount;
    })
  }

  minValue: number = 500;
  maxValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 1000000
  };

  sortByRange(low: number, high: number) {
   
    this.service.setRange(low, high);
    
  }

  sortByBestSeller(rate: number) {
    this.service.getProductsByRating(rate).subscribe(data => this.ProductList = data);
  }


}
