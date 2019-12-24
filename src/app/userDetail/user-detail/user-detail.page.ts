import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/model/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage {

  user: UserData;


  constructor() {
    this.user = new UserData('1', 22, 'W', 'lose weight', 100 , 150, 2);

   }



}
