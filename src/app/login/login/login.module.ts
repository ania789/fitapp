import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderPage } from 'src/app/header/header/header.page';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
