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
  product: UserProduct;
  productName;
  mealKcal: number;
  mealProtein: number;
  mealFat: number;
  mealCarbo: number;
  allProducts: Array<ProductData>;
  addedProducts: Array<UserProduct> = [];
  addedProductName: string;
  addedProductKcal: number;
  addedProductProtein: number;
  addedProductFat: number;
  addedProductCarbo: number;
  nutrientType: NutrientType;
  selectedProduct: ProductData;
  objProduct: any;
  mealType: typeof MealType;
  seletedMeal: string;

  constructor() {
    this.meal = new MealClass();
    this.mealType = MealType;
    //this.meal.mealType = MealType.BREAKFAST;
    // console.log(this.addedProducts);
    // this.addedProductName = this.meal.getNameOfAddedProduct(this.product);
    // this.addedProductKcal = this.meal.getInfoAboutAddedProduct(NutrientType.KCAL, this.product);
    // this.addedProductProtein = this.meal.getInfoAboutAddedProduct(NutrientType.PROTEIN, this.product);
    // this.addedProductFat = this.meal.getInfoAboutAddedProduct(NutrientType.FAT, this.product);
    // this.addedProductCarbo = this.meal.getInfoAboutAddedProduct(NutrientType.CARBO, this.product);
    // this.addedProducts = this.meal.getNameFromAddedProduct();
    this.mealKcal = this.meal.recount(NutrientType.KCAL);
    this.mealProtein = this.meal.recount(NutrientType.PROTEIN);
    this.mealFat = this.meal.recount(NutrientType.FAT);
    this.mealCarbo = this.meal.recount(NutrientType.CARBO);
    // // this.meal.deleteProduct('sugar');
    // //this.mealProtein = this.meal.getValueFromMeals(NutrientType.PROTEIN);
    // this.meal.getValueFromMeals(NutrientType.FAT);
    // this.meal.getValueFromMeals(NutrientType.CARBO);
    // this.meal.addProduct(100); // add a few products to the meal
    // this.mealNumber = this.meal.getValueFromMeals(NutrientType.FAT);
    const product1 = ProductData.getTestProduct(1);
    const product2 = ProductData.getTestProduct(2);
    const product3 = ProductData.getTestProduct(3);
    this.allProducts = [product1, product2, product3];
    console.log(this.allProducts);

  }


  onClick(event, product: ProductData) {
   console.log(this.selectedProduct);
   product = this.selectedProduct;
   this.meal.addProduct(product, 100);
  }

  setMeal(event, meal: string) {
    this.meal.mealType = this.meal.setMealType(this.seletedMeal);
  }



}
