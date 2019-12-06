export interface Product {
    id: string;
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbo: number;

}

export class ProductClass implements Product {
    id: string;
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbo: number;

    product: Product;

    getProduct(): Product {

        const result: Product = {id: '1', name: 'banana', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
        this.product = {
            id: result.id,
            name: result.name,
            kcal: result.kcal,
            protein: result.protein,
            fat: result.fat,
            carbo: result.fat
        };
        return this.product;
    }


}

