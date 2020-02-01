import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserData } from 'src/model/UserDetail';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatSnackBarModule, MatSnackBar} from '@angular/material';
import { RouterModule } from '@angular/router';
import { Firebase } from 'src/model/Firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  user: UserData;
  constructor(private authService: AuthService) {
   }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = null;
    this.password = null;
  }

}
