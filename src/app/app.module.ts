import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MealClass } from 'src/model/Meals';
import { ProductData } from 'src/model/Product';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatCardModule, MatButtonModule, MatRadioModule, MatSidenavModule, MatSnackBarModule, MatListModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatSortModule, MatSpinner, MatProgressSpinnerModule, MatDialogModule, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase';
import { QuotationPageModule } from './quotation/quotation/quotation.module';
import { HeaderPage } from './header/header/header.page';
import { HeaderPageModule } from './header/header/header.module';
import { HomePageModule } from './home/home.module';

const config = {
  apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
  authDomain: 'fitapp-9d9f9.firebaseapp.com',
  databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
  projectId: 'fitapp-9d9f9',
  storageBucket: 'fitapp-9d9f9.appspot.com',
  messagingSenderId: '33153467513',
  appId: '1:33153467513:web:dae144700c00d0af0200a8'
};


firebase.initializeApp(config);



const MaterialModules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatButtonModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDialogModule
];





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
      authDomain: 'fitapp-9d9f9.firebaseapp.com',
      databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
      projectId: 'fitapp-9d9f9',
      storageBucket: 'fitapp-9d9f9.appspot.com',
      messagingSenderId: '33153467513',
      appId: '1:33153467513:web:dae144700c00d0af0200a8'
    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    MaterialModules,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    QuotationPageModule,
    ReactiveFormsModule,
    HeaderPageModule,
    HomePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    MealClass,
    ProductData,
    NgForm,
    AuthService,
    AngularFireAuthModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
