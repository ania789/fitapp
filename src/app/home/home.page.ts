import { Component, Injectable } from '@angular/core';
import { Product, ProductClass } from 'src/model/Product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  product: Product;
  constructor(private productClass: ProductClass) {
    this.product = productClass.getProduct();

  }

}
