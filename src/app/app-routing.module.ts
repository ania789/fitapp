import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home',
    canActivate: [AuthService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user-detail',
    canActivate: [AuthService],
    loadChildren: () => import('./userDetail/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user',
    canActivate: [AuthService],
    loadChildren: () => import('./user/user/user.module').then( m => m.UserPageModule)
  },
  // {
  //   path: 'header',
  //   loadChildren: () => import('./header/header/header.module').then( m => m.HeaderPageModule)
  // },
  {
    path: 'quotation',
    canActivate: [AuthService],
    loadChildren: () => import('./quotation/quotation/quotation.module').then( m => m.QuotationPageModule)
  },
  {
    path: 'home2',
    canActivate: [AuthService],
    loadChildren: () => import('./home2/home2/home2.module').then( m => m.Home2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( {
      apiKey: 'AIzaSyCnm-pXuNmhRCoOEK6nEtpZ3MLiA0DGGb8',
          authDomain: 'fitapp-9d9f9.firebaseapp.com',
          databaseURL: 'https://fitapp-9d9f9.firebaseio.com',
          projectId: 'fitapp-9d9f9',
          storageBucket: 'fitapp-9d9f9.appspot.com',
          messagingSenderId: '33153467513',
          appId: '1:33153467513:web:dae144700c00d0af0200a8'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
