import { Component, Injectable } from '@angular/core';
import { Meals, MealType, MealClass, NutrientType, UserProduct } from 'src/model/Meals';
import { Product, ProductData } from 'src/model/Product';
import { AlertController } from '@ionic/angular';
import { Firebase } from 'src/model/Firebase';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  meal: MealClass; // meals: MealClass[];
  meals: MealClass[] = [];
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
  nutrientType: typeof NutrientType;
  selectedProduct: ProductData;
  objProduct: any;
  mealType: typeof MealType;
  seletedMeal: string;
  numberOfGrams: number;
  productToDelete: ProductData;
  products: Array<{id: string, weight: number}>;
  firebase: Firebase = new Firebase();

  constructor(public alertController: AlertController, private snackBar: MatSnackBar) {
    this.meal = new MealClass();
    this.allProducts = this.firebase.getProducts();
    this.mealType = MealType;
    console.log(this.mealType.BREAKFAST);
    this.meals[this.mealType.BREAKFAST] = new MealClass();
    this.meals[this.mealType.LUNCH] = new MealClass();
    this.meals[this.mealType.DINNER] = new MealClass();
    this.meals[this.mealType.SUPPER] = new MealClass();
    // this.firebase.getArrayFromDb('breakfast').then(data => {
    //   this.products = data;
    // });
    // tslint:disable-next-line:forin
    for (const mealIterator in MealType) {
      console.log(mealIterator);
      this.firebase.arrayWithAddedProductFromDb(mealIterator.toLowerCase()).then(data => {
      this.meals[mealIterator].productList = data;
      console.log(this.meals[mealIterator].productList);
    });
      // this.meals[this.mealType.BREAKFAST].mergeArrayFromDb(this.products, this.allProducts);
    }
    console.log(this.allProducts);
    console.log(localStorage.getItem('uid'));
    this.refreshTotals();
  }

  setMeal() {
    this.meal.mealType = this.meal.setMealType(this.seletedMeal);
  }


  async presentAlertConfirmAndAddGrams() {
    const alert = await this.alertController.create({
      header: 'Grams',
      inputs: [
        {
          name: 'gram',
          type: 'number',
          placeholder: 'gram'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.numberOfGrams = alertData.gram;
            this.addProduct(this.selectedProduct, this.numberOfGrams, this.seletedMeal);
          }
        }
      ]
    });
    await alert.present();
  }

  addProduct(selectedProduct: ProductData, numberOfGrams: number, selectedMeal: string) {
    const addedProduct = new UserProduct(selectedProduct, numberOfGrams);
    this.meals[selectedMeal].addProduct(addedProduct);
    this.firebase.saveAddedProducts(addedProduct, selectedMeal);
    this.refreshTotals();
  }



  deleteProduct(meal: string, productID: number) {
    // tslint:disable-next-line:forin
    this.meals[meal].productList.forEach(element => {
      if (element.data.id === productID ) {
        this.meals[meal].deleteProduct(element.data.name);
        this.firebase.deleteProductFromDb(element, meal);
      }

    });
    this.refreshTotals();
  }

 refreshTotals() {

  this.mealKcal = 0;
  this.mealProtein = 0;
  this.mealFat = 0;
  this.mealCarbo = 0;
  // tslint:disable-next-line:forin
  for (const meal in MealType) {
   this.mealKcal = this.mealKcal +  this.meals[meal.toLocaleLowerCase()].recount(NutrientType.KCAL);
   this.mealProtein = this.mealProtein + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.PROTEIN);
   this.mealFat = this.mealFat + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.FAT);
   this.mealCarbo = this.mealCarbo + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.CARBO);

  }
}

}
