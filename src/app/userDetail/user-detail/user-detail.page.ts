import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/model/User';
import { FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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



  constructor(public alertCtrl: AlertController ) {
   // this.user = new UserData('1', this.age, 'W', 'lose weight', 100 , 150, 2);
   //  console.log(this.user.age);
   }



    async presentAlertRadio() {
      this.user = new UserData('1', this.age, this.sex, Number(this.purpose), this.weight, this.height, this.activity);
      console.log(this.user);

      if(this.user.getReason() !== Number(this.purpose)){
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
            name: 'radio1',
            type: 'radio',
            label: this.user.castNubmerToStringReson(this.user.getReason()),
            value: 'value1',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: this.user.castNubmerToStringReson(Number(this.purpose)),
            value: 'value2'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      });

      await alert.present();
    }
  }

}






