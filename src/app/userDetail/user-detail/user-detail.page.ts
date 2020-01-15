import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/model/UserDetail';
import {
  FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule
} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Firebase } from 'src/model/Firebase';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage {

  user: UserData;
  age: number;
  height: number;
  weight: number;
  sex: string;
  purpose: number;
  activity: number;
  AppReson: number;
  firebase: Firebase;



  constructor(public alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.firebase = new Firebase();
  }



  async presentAlertRadio() {
    // tslint:disable-next-line:max-line-length
    this.user = new UserData(this.age, this.sex, Number(this.purpose), this.weight, this.height, this.activity);

    console.log(this.user.getReason(this.user.getBmiValue()));
    console.log(Number(this.purpose));

    if (this.user.getReason(this.user.getBmiValue()) !== Number(this.purpose)) {
      const alert = await this.alertCtrl.create({
        header: 'What you choose?',
        message: 'You have to choose one of the option, one is what you choose, second is what application count ',
        cssClass: 'my-custom-alert',
        inputs: [
          {
            name: 'purpose',
            type: 'radio',
            label: this.user.castNubmerToStringReson(this.user.getReason(this.user.getBmiValue())),
            value: this.user.getReason(this.user.getBmiValue()),
            checked: true
          },
          {
            name: 'userPurpose',
            type: 'radio',
            label: this.user.castNubmerToStringReson(Number(this.purpose)),
            value: this.purpose
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: 'Ok',
            handler: (alertData) => {
              this.saveUserDetail(alertData);
              this.presentToast();
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.presentToast();
    }

  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }
  saveUserDetail(alertData: any) {
    // tslint:disable-next-line:max-line-length
    this.user = new UserData(this.age, this.sex, alertData, this.weight, this.height, this.activity);
    this.firebase.saveInfoAboutUser(this.user);
  }
}
