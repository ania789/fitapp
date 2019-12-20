export class User {
    uid: string;
    age: number;
    sex: string;
    purpose: string;
    level: string;
    weight: string;
    height: string;
    bmi: number;
    ppm: number;
    cpm: number;

    constructor(uid: string, age: number, sex: string, purpose: string, level: string, weight: string, height: string ) {
        this.uid = uid;
        this.age = age;
        this.sex = sex;
        this.purpose = purpose;
        this.level = level;
        this.weight = weight;
        this.height = height;
    }

  
}