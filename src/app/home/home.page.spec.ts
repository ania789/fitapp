import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MealType } from 'src/model/Meals';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderPageModule } from '../header/header/header.module';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import * as firebase from 'firebase';
import { Home2Page } from '../home2/home2/home2.page';

// firebase.initializeApp({
//   apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
//   authDomain: 'fitapp-9d9f9.firebaseapp.com',
//   databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
//   projectId: 'fitapp-9d9f9',
//   storageBucket: 'fitapp-9d9f9.appspot.com',
//   messagingSenderId: '33153467513',
//   appId: '1:33153467513:web:dae144700c00d0af0200a8'
// });

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(),
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        RouterModule,
        RouterModule.forRoot([{
          path: '',
          component: HomePage
        }]),
        AngularFireModule.initializeApp({
  apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
      authDomain: 'fitapp-9d9f9.firebaseapp.com',
      databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
      projectId: 'fitapp-9d9f9',
      storageBucket: 'fitapp-9d9f9.appspot.com',
      messagingSenderId: '33153467513',
      appId: '1:33153467513:web:dae144700c00d0af0200a8' })]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add product to meal', () => {
    expect(component.meals[MealType.BREAKFAST].productList.length === 0);
  });
});
