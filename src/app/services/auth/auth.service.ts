import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(
    public angularFireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,

  ) {
    angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

  }


  signup(email: string, password: string) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        this.snackBar.open('Account successfully created!', 'OK', {
          duration: 3000
        });

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
        console.log('success');
      })
      .catch(err => {
        this.snackBar.open('error', 'OK', {
          duration: 3000
        });
      });
  }
}
