import {ProductData } from './Product';
import { ThrowStmt } from '@angular/compiler';

export enum MealType {BREAKFAST = 'breakfast', LUNCH = 'lunch', DINNER= 'dinner', SUPPER= 'supper'}

export enum NutrientType { KCAL= 'kcal', PROTEIN = 'protein', FAT = 'fat', CARBO =  'carbo'}

export class Meals {
    id: string;
    mealType: MealType;
    // kcal: number;
    // protein: number;
    // fat: number;
    // carbo: number;

}

export class UserProduct {
    data: ProductData;
    weight: number;

    constructor(data: ProductData, weight: number) {
        this.data = data;
        this.weight = weight;
    }

    getKcal(): number {
        return this.data.kcal * this.weight * 0.01;
    }
    getProtein(): number {
        return this.data.protein * this.weight * 0.01;
    }
    getFat(): number {
        return this.data.fat * this.weight * 0.01;
    }
    getCarbo(): number {
        return this.data.carbo * this.weight * 0.01;
    }


}

export class MealClass extends Meals {
    productList: Array<UserProduct> = [];
    kcalValue: number;
    // fillArrayProduct() {
    //     const Banan: ProductData = new ProductData ('1', 'banana', 89, 1, 0.1, 21.8);
    //     this.productList.push({data: Banan, weight: 100});
    // }

    getMealName(): string {
        switch (this.mealType) {
            case MealType.BREAKFAST:
                return 'breakfast';
            case MealType.LUNCH:
                return 'lunch';
            case MealType.DINNER:
                return 'dinner';
            case MealType.SUPPER:
                return 'supper';
        }
    }

    setMealType(mealType: string): MealType {
        switch (mealType) {
            case mealType = 'breakfast':
                return MealType.BREAKFAST;
            case mealType = 'lunch':
                return MealType.LUNCH;
            case mealType = 'dinner':
                return MealType.DINNER;
            case mealType = 'supper':
                return MealType.SUPPER;
        }
    }

    addProduct(product: ProductData, weight: number) {
        // const Sugar: ProductData = new ProductData ('1', 'sugar', 89, 1, 0.5, 321.8);
        // // const product: UserProduct  = new UserProduct(Sugar, 100);
        // // tslint:disable-next-line:forin

        // const Chocolate: ProductData = new ProductData ('1', 'chocolate', 100, 1.2, 1.1, 121.8);
        // const Banana: ProductData = new ProductData ('1', 'banana', 120, 1, 9.1, 221.8);
        // const objectSugar: UserProduct = new UserProduct(Sugar, weight);
        // const objectChocolate: UserProduct = new UserProduct(Chocolate, weight);
        // const objectBanana: UserProduct = new UserProduct(Banana, weight);
        const addedProduct = new UserProduct(product, weight);
        this.productList.push(addedProduct);
        console.log(this.productList);
    }


    getNameOfAddedProduct(product: UserProduct): string {
        return product.data.name;
    }

    convertWeight(weight: number): number {
        return weight * 0.01;
    }

    displayProductListArray() {
        console.log(this.productList);
    }

    recount(property: NutrientType): number {
        const propertyName = property;
        // let counter = 0;
        // this.productList.forEach(value => {
        //     counter += value.data[propertyName];
        //     console.log(counter);
        // });
        // console.log(counter);
        // return counter;
        const sumOfNutrientType = this.productList.reduce((sum, currentValue) => {
            return Math.round(sum + (currentValue.data[propertyName] * this.convertWeight(currentValue.weight)));
          }, 0);
        return sumOfNutrientType;


    }

    getNameFromAddedProduct(): Array<string> {
        const propertyName = 'name';
        const result = this.productList.map(a  => a.data.name);
        console.log(result);
        return result;
    }

    getPropertiesFromAddedProducts(weightOfProduct: number, weight: number) {
        return weightOfProduct * (weight * this.convertWeight(weight));
    }

    deleteProduct(nameOfdeleteProduct: string) {
        // tslint:disable-next-line:forin
        // tslint:disable-next-line:no-var-keyword
        for (var i = 0; i < this.productList.length; i++) {
             if ( this.productList[i].data.name === nameOfdeleteProduct) {
                this.productList.splice(i, 1);
            }
        }
    }





}
