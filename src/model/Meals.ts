import { ProductData, Product } from './Product';
import { ThrowStmt } from '@angular/compiler';
import { User } from './User';
import { ContentObserver } from '@angular/cdk/observers';

export enum MealType {
    BREAKFAST = 'breakfast',
    LUNCH = 'lunch',
    DINNER = 'dinner',
    SUPPER = 'supper'
}

export enum NutrientType { KCAL = 'kcal', PROTEIN = 'protein', FAT = 'fat', CARBO = 'carbo' }

export class Meals {
    mealType: MealType;

    // constructor(mealType: MealType) {
    //     this.mealType = mealType;
    // }

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

    addProduct(userProduct: UserProduct) {
        const index = this.productList.findIndex(it => it.data.id === userProduct.data.id);
        if (index === -1) {
            this.productList.push(userProduct);
        } else {
            this.productList[index] = userProduct;
        }
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
        const sumOfNutrientType = this.productList.reduce((sum, currentValue) => {
            return Math.round(sum + (currentValue.data[propertyName] * this.convertWeight(currentValue.weight)));
        }, 0);
        return sumOfNutrientType;


    }

    getNameFromAddedProduct(): Array<string> {
        const propertyName = 'name';
        const result = this.productList.map(a => a.data.name);
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
            if (this.productList[i].data.name === nameOfdeleteProduct) {
                this.productList.splice(i, 1);
            }
        }
    }

    deleteProductIndex(index: number) {
        this.productList.splice(index, 1);
    }

    // tslint:disable-next-line:ban-types
    mergeArrayFromDb(addedProductsDb: Array<{ id: string, weight: number }>, allProducts: Array<ProductData>) {
        const productList: Array<UserProduct> = [];
        addedProductsDb.forEach(element => {
            const productToAdd: UserProduct = new UserProduct(allProducts[Number(element.id) - 1], element.weight);
            this.productList.push(productToAdd);
        });
    }



}
