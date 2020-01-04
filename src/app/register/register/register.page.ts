import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {


  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);

}

}
