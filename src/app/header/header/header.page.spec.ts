import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderPage } from './header.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { HeaderPageModule } from './header.module';
import { AngularFireModule } from '@angular/fire';

describe('HeaderPage', () => {
  let component: HeaderPage;
  let fixture: ComponentFixture<HeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPage ],
      imports: [IonicModule.forRoot(),
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        RouterModule,
        RouterModule.forRoot([{
          path: '',
          component: HeaderPage
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

    fixture = TestBed.createComponent(HeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
