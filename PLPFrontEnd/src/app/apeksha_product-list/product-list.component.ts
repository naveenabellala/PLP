import { Component, OnInit } from '@angular/core';
import { CapStoreService } from '../cap-store.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product;
  constructor(private service:CapStoreService) { }

  ngOnInit() {

    this.service.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }


}
