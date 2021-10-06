import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = false;

  constructor(private r: Router, private auth: AngularFireAuth) {
    // r: Router --> this allows the 'this' later in others funcs in this class!!
    // auth: AngularFireAuth --> this allows Firebase's authentication!!

    this.auth.onAuthStateChanged(userDetails => {this.isLoggedIn = !!userDetails});
    // "!!" if the value other then null then return false 
  }

  logout() {
    // in the arrow func here: navigation to the login page after logout
    this.auth.signOut().then(() => { this.r.navigate(['login'])});
  }
}