import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private r: Router, private auth: AngularFireAuth) {
    // this allows the 'this' later in others funcs in this class!!
  }

  login(username, pass) {
    if (username && pass) {
      // in the arrow func here: navigation to the customers page after login
      this.auth.signInWithEmailAndPassword(username, pass).then(() => { document.cookie = username; this.r.navigate(['customers']) }).catch(() => { alert('User Does Not Exists.') });
    }
  }
}