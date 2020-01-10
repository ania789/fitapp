enum reasonValue {lose = 2, stay = 1, get = 0}

export class UserData {
    uid: string;
    age: number;
    sex: string;
    userPurpose: number;
    level: number;
    weight: number;
    height: number;
    bmi: number;
    ppm: number;
    cpm: number;
    protein: number;
    fat: number;
    carbo: number;

    constructor(uid: string, age: number, sex: string, userPurpose: number,  weight: number, height: number , level: number) {
        this.uid = uid;
        this.age = age;
        this.sex = sex;
        this.userPurpose = userPurpose;
        this.weight = weight;
        this.height = height;
        this.level = level;
    }

 // weight: number, height: number
    getBmiValue(): number {
        const smallerHeight = this.height / 100;
        return this.weight / ( Math.pow(smallerHeight, 2));
    }

    getKcalAccordToReason(): number {
        if (this.userPurpose === 0) {
            return this.cpm - 300;
        } else if (this.userPurpose === 1) {
            return this.cpm;
        } else {
            return this.cpm + 300;
        }
    }

    getPPmValue(): number {
        if (this.sex.match('W')) {
            this.ppm = 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
        } else {
            this.ppm = 66.5 + 13.75 * this.weight + 5.003 * this.height - 6.775 * this.age;
        }
        return this.ppm;
    }

    getCpmValue(): number {
        this.cpm = this.ppm * this.level;
        return this.cpm;
    }


    getReason(bmi: number): number {
        if (bmi < 18.5) {
            return 2;
        } else if (bmi < 24.9 && bmi > 18.5) {
            return 1;
        } else if (bmi > 24.5) {
            return 0;
        }

    }

    castNubmerToStringReson(reason: number): string {
        if (reason === 0 ) {
             return 'lose weight';
        } else if (reason === 1) {
            return 'maintanace weight';
        } else {
            return 'get weight';
        }
    }

    getValueOfNutrientiens() {
        if (this.level === 1.4 || this.level === 1.6) {
            this.protein = 1.75 * this.weight;
            this.fat = (this.ppm * 0.25);
            this.carbo = (this.ppm - this.protein - this.fat);
        } else if (this.level === 1.75 || this.level === 2.0) {
            this.protein = 2 * this.weight;
            this.fat = (this.ppm * 0.25);
            this.carbo = (this.ppm - this.protein - this.fat);
        } else {
            this.protein = 2.5 * this.weight;
            this.fat = (this.ppm * 0.25);
            this.carbo = (this.ppm - this.protein - this.fat);
        }
    }







}
