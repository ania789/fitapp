import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Home2Page } from './home2.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { HeaderPageModule } from 'src/app/header/header/header.module';

describe('Home2Page', () => {
  let component: Home2Page;
  let fixture: ComponentFixture<Home2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2Page ],
      imports: [IonicModule.forRoot(),
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        HeaderPageModule,
        RouterModule,
        RouterModule.forRoot([{
          path: '',
          component: Home2Page
        }]),
        AngularFireModule.initializeApp({
  apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
      authDomain: 'fitapp-9d9f9.firebaseapp.com',
      databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
      projectId: 'fitapp-9d9f9',
      storageBucket: 'fitapp-9d9f9.appspot.com',
      messagingSenderId: '33153467513',
      appId: '1:33153467513:web:dae144700c00d0af0200a8' }),
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
