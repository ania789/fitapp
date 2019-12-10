import { Component, Injectable } from '@angular/core';
import { Product, ProductClass } from 'src/model/Product';
import { MealsClass, Meals } from 'src/model/Meals';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  product: Array<Meals>;
  constructor(private productClass: MealsClass) {
      productClass.fillArray();
      console.log(productClass.getKcalFromMeal('lunch'));
  }

}
