import { Component, OnInit } from '@angular/core';
import { Firebase } from 'src/model/Firebase';
import { UserData } from 'src/model/UserDetail';
import { LoadingController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  providers: [AngularFireAuth]
})
export class UserPage {


  user: UserData;
  firebase = new Firebase();
  constructor() {
    this.firebase.getInformationAboutUser().then(data => {
      this.user = data;
    });
    }
  }












