import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/model/UserDetail';
import { FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Firebase } from 'src/model/Firebase';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage {

  user: UserData;
  age: number;
  infoForm: FormGroup;
  height: number;
  weight: number;
  sex: string;
  purpose: number;
  activity: number;
  AppReson: number;
  firebase: Firebase;



  constructor(public alertCtrl: AlertController ) {
      this.firebase = new Firebase();
   }



    async presentAlertRadio() {
      // tslint:disable-next-line:max-line-length
      this.user = new UserData(localStorage.getItem('uid'), this.age, this.sex, Number(this.purpose), this.weight, this.height, this.activity);


      if (this.user.getReason() !== Number(this.purpose)) {
      const alert = await this.alertCtrl.create({
        header: 'What you choose?',
        inputs: [
          // {
          //   name: 'radio1',
          //   label:  this.user.castNubmerToStringReson(this.user.getReason()),
          //   checked: true
          // },
          // {
          //   name: 'radio2',
          //   label: this.user.castNubmerToStringReson(this.purpose)
          // },
          {
            name: 'purpose',
            type: 'radio',
            label: this.user.castNubmerToStringReson(this.user.getReason()),
            value: this.user.getReason(),
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
              // tslint:disable-next-line:max-line-length
              this.user = new UserData(localStorage.getItem('uid'), this.age, this.sex, alertData, this.weight, this.height, this.activity);
              this.firebase.saveInfoAboutUser(this.user);
            }
          }
        ]
      });
      await alert.present();
  }

}
}
