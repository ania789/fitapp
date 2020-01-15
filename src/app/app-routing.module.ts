import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home',
    canActivate: [AuthService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
