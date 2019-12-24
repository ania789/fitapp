enum reasonValue {lose = 'lose weight', stay = 'don t have to lose', get = 'get weight'}

export class UserData {
    uid: string;
    age: number;
    sex: string;
    userPurpose: string;
    level: number;
    weight: number;
    height: number;
    bmi: number;
    ppm: number;
    cpm: number;

    constructor(uid: string, age: number, sex: string, userPurpose: string,  weight: number, height: number , level: number) {
        this.uid = uid;
        this.age = age;
        this.sex = sex;
        this.userPurpose = userPurpose;
        this.weight = weight;
        this.height = height;
        this.level = level;
        this.bmi = this.getBmiValue();
        this.ppm = this.getPPmValue();
    }

 // weight: number, height: number
    getBmiValue(): number {
        const smallerHeight = this.height / 100;
        return this.weight / ( Math.pow(smallerHeight, 2));
    }

    getPPmValue(): number {
        if (this.sex.match('W')) {
            return 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
        } else {
            return 66.5 + 13.75 * this.weight + 5.003 * this.height - 6.775 * this.age;
        }
    }

    getCpmValue(): number {
        return this.ppm * this.level;
    }


    getReason(): reasonValue {
        if (this.bmi < 18.5) {
            return reasonValue.get;
        } else if (this.bmi < 24.9 && this.bmi > 18.5) {
            return reasonValue.stay;
        } else if (this.bmi > 24.5) {
            return reasonValue.lose;
        }

    }







}
