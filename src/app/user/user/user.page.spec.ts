import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderPageModule } from 'src/app/header/header/header.module';
import { AngularFireModule } from '@angular/fire';

import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material';

firebase.initializeApp({
  apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
  authDomain: 'fitapp-9d9f9.firebaseapp.com',
  databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
  projectId: 'fitapp-9d9f9',
  storageBucket: 'fitapp-9d9f9.appspot.com',
  messagingSenderId: '33153467513',
  appId: '1:33153467513:web:dae144700c00d0af0200a8'
});

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPage],
      imports: [AngularFireAuthModule, MatSnackBarModule, HeaderPageModule, IonicModule.forRoot(), FormsModule, ReactiveFormsModule,
        AngularFireAuthModule,
        RouterModule.forRoot([{
          path: '',
          component: UserPage
        }]),
        AngularFireModule.initializeApp({
          apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
          authDomain: 'fitapp-9d9f9.firebaseapp.com',
          databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
          projectId: 'fitapp-9d9f9',
          storageBucket: 'fitapp-9d9f9.appspot.com',
          messagingSenderId: '33153467513',
          appId: '1:33153467513:web:dae144700c00d0af0200a8'
        })]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
