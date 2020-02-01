import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from 'src/app/home/home.module';
import { UserDetailPage } from 'src/app/userDetail/user-detail/user-detail.page';
import { LoginPage } from 'src/app/login/login/login.page';
import { RegisterPage } from 'src/app/register/register/register.page';
import { UserPage } from 'src/app/user/user/user.page';
import { HeaderPage } from 'src/app/header/header/header.page';
import { QuotationPage } from 'src/app/quotation/quotation/quotation.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home',
    canActivate: [AuthService],
    component: HomePageModule }
];


describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(),
      FormsModule,
      RouterModule,
      MatSnackBarModule,
      ReactiveFormsModule,
      AngularFireAuthModule,
      RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
      authDomain: 'fitapp-9d9f9.firebaseapp.com',
      databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
      projectId: 'fitapp-9d9f9',
      storageBucket: 'fitapp-9d9f9.appspot.com',
      messagingSenderId: '33153467513',
      appId: '1:33153467513:web:dae144700c00d0af0200a8'
    })]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
