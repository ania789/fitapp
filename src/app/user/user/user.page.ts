import { Component, OnInit } from '@angular/core';
import { Firebase } from 'src/model/Firebase';
import { UserData } from 'src/model/UserDetail';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {


  firebase = new Firebase();
  user: UserData;

  constructor() {
    this.firebase.getInformationAboutUser().then(data => {
      this.user = data;
      console.log(this.user.height);
    });
  }





  }





