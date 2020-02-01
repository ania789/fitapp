import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';
import { Firebase } from 'src/model/Firebase';
import { ToastController } from '@ionic/angular';
import { CanActivate, Router } from '@angular/router';
import { UserData } from 'src/model/UserDetail';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  user: User;
  userData: UserData;
  firebase = new Firebase();
  constructor(
    public angularFireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router

  ) {
    angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

  }

  canActivate() {
    if (this.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
   }


  isAuthenticated() {
    const token = localStorage.getItem('uid');
    if (token) {
      return true;
    }
    return false;
  }


  signup(email: string, password: string) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        this.firebase.createDocumentAfterRegister();
        this.snackBar.open('Account successfully created!', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/user-detail']);
      })
      .catch(err => {
        this.snackBar.open(err, 'OK', {
          duration: 3000
        });
      });
  }

  login(email: string, password: string) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        // this.userData.username = email;
        this.router.navigate(['/quotation']);
      })
      .catch(err => {
        this.snackBar.open('error', 'OK', {
          duration: 3000
        });
      });
  }

  logout() {
    localStorage.clear();
    return this.angularFireAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
