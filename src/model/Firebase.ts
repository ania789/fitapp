import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product, ProductData } from './Product';
import { UserData } from './UserDetail';
import { Observable } from 'rxjs';
import { UserProduct, MealType } from './Meals';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

export class Firebase {

    snackBar: MatSnackBar;
    db = firebase.firestore();
    getProducts(): Array<Product> {
        const productArr: Array<Product> = [];
        this.db.collection('Product').get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                snapshot.forEach(doc => {
                    // tslint:disable-next-line:max-line-length
                    const product = new Product(doc.data().id, doc.data().name, doc.data().kcal, doc.data().protein, doc.data().fat, doc.data().carbo);
                    productArr.push(product);
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });

        return productArr;
    }

    saveInfoAboutUser(user: UserData) {
        this.db.collection('UserData').doc(localStorage.getItem('uid')).set(Object.assign({}, user))
            .then(snapshot => {
                console.log('Document successfully written!');
            })
            .catch(err => {
                console.error('Error writing document: ', err);
            });
    }

    createDocumentAfterRegister() {
        // tslint:disable-next-line:forin
        for (const meal in MealType) {
            this.db.collection('UserProduct').add({
                meal: meal.toLocaleLowerCase(),
                products: [],
                uid: localStorage.getItem('uid')
            })
                .then(snapshot => {
                    console.log(snapshot);
                })
                .catch(err => {
                    console.error('Error writing document: ', err);
                });
        }
    }

    saveAddedProducts(userProduct: UserProduct, mealType: string) {
        this.db.collection('UserProduct')
            .where('uid', '==', localStorage.getItem('uid'))
            .where('meal', '==', mealType)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if (doc.data().products.length === 0) {
                        this.db.collection('UserProduct').doc(doc.id).update({
                            products: firebase.firestore.FieldValue.arrayUnion({ id: userProduct.data.id, weight: userProduct.weight })
                        });
                    } else {
                        doc.data().products.forEach(element => {
                            if (element.id === userProduct.data.id) {
                                this.db.collection('UserProduct').doc(doc.id).update({
                                    products: firebase.firestore.FieldValue.arrayRemove({ id: element.id, weight: element.weight })
                                });
                                this.db.collection('UserProduct').doc(doc.id).update({
                                });
                            } else {
                                this.db.collection('UserProduct').doc(doc.id).update({
                                    // tslint:disable-next-line:max-line-length
                                    products: firebase.firestore.FieldValue.arrayUnion({ id: userProduct.data.id, weight: userProduct.weight })
                                });
                            }
                        });
                    }
                });

            });
    }

    deleteProductFromDb(userProduct: UserProduct, mealType: string) {
        this.db.collection('UserProduct')
            .where('uid', '==', localStorage.getItem('uid'))
            .where('meal', '==', mealType)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.db.collection('UserProduct').doc(doc.id).update({
                        products: firebase.firestore.FieldValue.arrayRemove({ id: userProduct.data.id, weight: userProduct.weight })
                    });
                });

            });

    }



    async getInformationAboutUser(): Promise<UserData> {
        let user: UserData;
        await this.db.collection('UserData').doc(localStorage.getItem('uid')).get()
            .then(doc => {
                if (doc.exists) {
                    // tslint:disable-next-line:max-line-length
                    user = new UserData(doc.data().age, doc.data().sex, doc.data().userPurpose, doc.data().weight, doc.data().height, doc.data().level);
                    console.log(localStorage.getItem('uid'));
                    console.log(doc.data());
                    console.log(user);
                    return user;
                } else {
                    console.log('no such document');
                }
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
        console.log(user);
        return user;
    }

    async getArrayFromDb(meal: string) {
        let productArr: Array<any> = [];
        await this.db.collection('UserProduct').where('meal', '==', meal).where('uid', '==', localStorage.getItem('uid')).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                snapshot.forEach(doc => {
                    // tslint:disable-next-line:max-line-length
                    // const product = new Product(doc.data().id, doc.data().name, doc.data().kcal, doc.data().protein, doc.data().fat, doc.data().carbo);
                    // productArr.push(product);
                    productArr = JSON.parse(JSON.stringify(doc.data().products));
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
        return productArr;
    }

    async arrayWithAddedProductFromDb(mealType: string): Promise<Array<{id: string, weight: number}>> {
        // tslint:disable-next-line:prefer-const
        let productList: Array<{id: string, weight: number}>;
        await this.db.collection('UserProduct')
        .where('uid', '==', localStorage.getItem('uid'))
        .where('meal', '==', mealType)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data().products);
                productList = doc.data().products;
            });
        });
        return productList;

    }




}
