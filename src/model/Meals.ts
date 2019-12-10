import { Product } from './Product';

export interface Meals {
    id: string;
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbo: number;
    meal: string;

}

export class MealsClass implements Meals {
    meal: string;
    id: string;
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbo: number;

    productList: Array<Meals> = [];
    kcalCounter: number;

    fillArray() {
        const result: Meals = {meal: 'breakfast', id: '1', name: 'banana', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
        const result2: Meals = {meal: 'breakfast', id: '1', name: 'banana', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
        const result3: Meals = {meal: 'lunch', id: '1', name: 'banana', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
        this.productList.push(result);
        this.productList.push(result2);
        this.productList.push(result3);
    }


    getKcalFromMeal(mealName: string): number {
        this.kcalCounter = 0;
        this.productList.forEach(value => {
            if((value.meal).match(mealName)){
                this.kcalCounter += value.kcal;
            }
        });
        return this.kcalCounter;
        //this.productList.forEach(x=> total +=x.kcal);
    }




}
