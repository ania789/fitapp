import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserDetailPage } from './user-detail.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderPageModule } from 'src/app/header/header/header.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

describe('UserDetailPage', () => {
  let component: UserDetailPage;
  let fixture: ComponentFixture<UserDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailPage ],
      imports: [HeaderPageModule, IonicModule.forRoot(), FormsModule, ReactiveFormsModule,
        AngularFireModule.initializeApp({
          apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
              authDomain: 'fitapp-9d9f9.firebaseapp.com',
              databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
              projectId: 'fitapp-9d9f9',
              storageBucket: 'fitapp-9d9f9.appspot.com',
              messagingSenderId: '33153467513',
              appId: '1:33153467513:web:dae144700c00d0af0200a8' }),
              AngularFireAuthModule,
              MatSnackBarModule,
              RouterModule.forRoot([{
                path: '',
                component: UserDetailPage
              }])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
