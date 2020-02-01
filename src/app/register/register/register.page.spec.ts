import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        RouterModule,
        RouterModule.forRoot([{
          path: '',
          component: RegisterPage
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

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  }, 30000);
});
