import { Component, Injectable, OnInit } from '@angular/core';
import { Meals, MealType, MealClass, NutrientType, UserProduct } from 'src/model/Meals';
import { Product, ProductData } from 'src/model/Product';
import { AlertController } from '@ionic/angular';
import { Firebase } from 'src/model/Firebase';
import { MatSnackBar } from '@angular/material';
import { UserData } from 'src/model/UserDetail';
import { MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HeaderPageModule} from 'src/app/header/header/header.module';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AngularFireAuth]
})


export class HomePage implements OnInit {
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
  products: Array<{ id: string, weight: number }>;
  firebase: Firebase = new Firebase();
  user: UserData;

  constructor(public alertController: AlertController, private snackBar: MatSnackBar) {
    this.meal = new MealClass();
    this.allProducts = this.firebase.getProducts();
    this.mealType = MealType;
    // tslint:disable-next-line:forin
    for (const mealIterator in MealType) {
      this.meals[mealIterator.toLocaleLowerCase()] = new MealClass();
    }
    // tslint:disable-next-line:forin
    for (const mealIterator in MealType) {
      this.firebase.getArrayFromDb(mealIterator.toLowerCase()).then(data => {
      this.meals[mealIterator.toLowerCase()].mergeArrayFromDb(data, this.allProducts);
      this.refreshTotals();
      });
    }
    localStorage.getItem('uid');

  }

  ngOnInit(): void {
  }




  setMeal() {
    this.meal.mealType = this.meal.setMealType(this.seletedMeal);
  }


  async presentAlertConfirmAndAddGrams(meal: string) {
    const alert = await this.alertController.create({
      header: 'Grams',
      inputs: [
        {
          name: 'gram',
          type: 'number',
          placeholder: 'gram',
          id: 'focus'
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
            this.addProduct(this.selectedProduct, this.numberOfGrams, meal);
          }
        }
      ]
    });
    await alert.present().then(() => document.getElementById('focus').focus());
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
      if (element.data.id === productID) {
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
      this.mealKcal = this.mealKcal + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.KCAL);
      this.mealProtein = this.mealProtein + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.PROTEIN);
      this.mealFat = this.mealFat + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.FAT);
      this.mealCarbo = this.mealCarbo + this.meals[meal.toLocaleLowerCase()].recount(NutrientType.CARBO);

    }
  }

}
