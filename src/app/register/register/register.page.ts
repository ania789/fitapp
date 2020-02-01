import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Firebase } from 'src/model/Firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {


  email: string;
  password: string;
  firebase = new Firebase();

  constructor(private authService: AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);
  }


}
