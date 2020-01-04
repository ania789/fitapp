import { Component, OnInit } from '@angular/core';
import { Firebase } from 'src/model/Firebase';
import { UserData } from 'src/model/UserDetail';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  firebase = new Firebase();
  user: UserData;

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.firebase.getInformationAboutUser().then(data => {
      this.user = data;
    });
  }




}
