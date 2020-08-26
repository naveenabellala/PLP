import { Component, OnInit } from '@angular/core';
import { CapServiceService } from '../cap-service.service';
import { Router } from '@angular/router';
import { IProductDetails } from '../iproduct-details';

@Component({
  selector: 'app-sort-by-views',
  templateUrl: './sort-by-views.component.html',
  styleUrls: ['./sort-by-views.component.css']
})
export class SortByViewsComponent implements OnInit {

  constructor(private service: CapServiceService, public router: Router) { }

  ProductList: IProductDetails[] = [];

  ngOnInit() {
    this.service.getAllProducts().subscribe((data) => {this.ProductList = data, this.sortByViews();});
  }

  sortByViews() {
    //this.status = 'viewsProd';
    this.ProductList = this.ProductList.sort(function (a, b) {
      return b.viewsCount - a.viewsCount;
    })
  }

}
