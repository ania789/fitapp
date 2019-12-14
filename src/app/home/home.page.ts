import { Component, Injectable } from '@angular/core';
import { Meals, MealType, MealClass, NutrientType, UserProduct } from 'src/model/Meals';
import { Product, ProductData } from 'src/model/Product';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  meal: MealClass;
  mealName: string;
  productName;
  mealKcal: number;
  mealProtein: number;
  mealFat: number;
  mealCarbo: number;
  allProducts: Array<ProductData>;
  addedProducts: Array<string> = [];
  mealOfAdded: number;
  nutrient: NutrientType;

  constructor() {
    this.meal = new MealClass();
    this.meal.mealType = MealType.BREAKFAST;
    this.mealName = this.meal.getMealName();
    this.meal.addProduct(100);
    this.mealOfAdded = this.meal.getInfoAboutAddedProduct(NutrientType.KCAL);
    this.mealOfAdded = this.meal.getInfoAboutAddedProduct(NutrientType.KCAL);
    this.mealOfAdded = this.meal.getInfoAboutAddedProduct(NutrientType.KCAL);

    this.addedProducts = this.meal.getNameFromAddedProduct();
    this.mealKcal = this.meal.recount(NutrientType.KCAL);
    this.mealProtein = this.meal.recount(NutrientType.PROTEIN);
    this.mealFat = this.meal.recount(NutrientType.FAT);
    this.mealCarbo = this.meal.recount(NutrientType.CARBO);

    // //this.mealProtein = this.meal.getValueFromMeals(NutrientType.PROTEIN);
    // this.meal.getValueFromMeals(NutrientType.FAT);
    // this.meal.getValueFromMeals(NutrientType.CARBO);
    // this.meal.addProduct(100); // add a few products to the meal
    // this.mealNumber = this.meal.getValueFromMeals(NutrientType.FAT);
    const product1 = ProductData.getTestProduct(1);
    const product2 = ProductData.getTestProduct(2);
    const product3 = ProductData.getTestProduct(3);
    this.allProducts = [product1, product2, product3];

  }

}
