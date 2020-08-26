import { Component, OnInit, Input } from '@angular/core';
import { IProductDetails } from '../iproduct-details';
import { CapServiceService } from '../cap-service.service';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: CapServiceService, public router: Router) { }
  ProductList: IProductDetails[];
  status: string = 'allProd';
  sortPriceRange: boolean = false;
  ngOnInit() {
    
    this.service.getAllProducts().subscribe((data) => this.ProductList = data);

  }

  allProductClicked() {
    this.status = 'allProd';

  }

  thirdPartyClicked() {
    this.status = 'thirdProd';
  }


  sortByLowToHigh() {
    this.status = 'lowToHighProd';
    this.ProductList=this.ProductList.sort(function(a,b){
      return a.price-b.price;
     })
  }
  sortByHighToLow() {
    this.status = 'highToLowProd';
    this.ProductList=this.ProductList.sort(function(a,b){
      return b.price-a.price;
     })
  }
  sortByViews() {
    this.status = 'viewsProd';
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
    console.log(low + high);
    this.status = 'priceRangeProd';
    //this.router.navigate(['/bypricerange']);
  }

  sortByBestSeller(rate: number) {
    this.service.getProductsByRating(rate).subscribe(data => this.ProductList = data);
  }



}
