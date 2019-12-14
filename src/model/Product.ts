export class Product {
    id: string;
    name: string;
    kcal: number;
    protein: number;
    fat: number;
    carbo: number;

    constructor(id: string, name: string, kcal: number, protein: number, fat: number, carbo: number) {
        this.id = id;
        this.name = name;
        this.kcal = kcal;
        this.protein = protein;
        this.fat = fat;
        this.carbo = carbo;
    }

}

export class ProductData extends Product {

    constructor(id: string, name: string, kcal: number, protein: number, fat: number, carbo: number) {
        super(id, name, kcal, protein, fat, carbo);
    }

    static getTestProduct(index: number): Product {

        switch (index) {
            case 1:
                return { id: '1', name: 'banana', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
            case 2:
                return { id: '2', name: 'chocolate', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
            case 3:
                return { id: '3', name: 'cake', kcal: 89, protein: 1, fat: 0.1, carbo: 21.8 };
        }


}
}
