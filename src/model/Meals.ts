import {ProductData } from './Product';
import { ThrowStmt } from '@angular/compiler';

export enum MealType {BREAKFAST, LUNCH, DINNER, SUPPER}

export enum NutrientType { KCAL= 'kcal', PROTEIN = 'protein', FAT = 'fat', CARBO =  'carbo'}

export class Meals {
    id: string;
    mealType: MealType;
    // kcal: number;
    // protein: number;
    // fat: number;
    // carbo: number;

}

export class Product {
    data: ProductData;
    weight: number;
    // getKcal() {
    //     return this.data.kcal * this.weight;
    // }

}

export class MealClass extends Meals {
    productList: Array<Product> = [];
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

    addProduct(weight: number) {
        const Sugar: ProductData = new ProductData ('1', 'sugar', 89, 1, 0.5, 321.8);
        const Chocolate: ProductData = new ProductData ('1', 'chocolate', 100, 1.2, 1.1, 121.8);
        const Banana: ProductData = new ProductData ('1', 'banana', 120, 1, 9.1, 221.8);
        this.productList.push({data: Sugar, weight});
        this.productList.push({data: Chocolate, weight});
        this.productList.push({data: Banana, weight});
    }

    recount(property: NutrientType): number {
        const propertyName = property;
        let counter = 0;
        this.productList.forEach(value => {
            counter += value.data[propertyName];
            console.log(counter);
        });
        console.log(counter);
        return counter;


    }



    // getValueFromMeals(property: NutrientType): number {
    //      const propertyName = property;
    //     // this.productList.forEach(value => {
    //     //     return value.data[propertyName];
    //     // });
    //     // return this;
    //     //let result = this.productList.map(a => a.data[property]);
    // }








}
