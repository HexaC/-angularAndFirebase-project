import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { AngularFireAuthGuardModule } from "@angular/fire/compat/auth-guard";

import { MatIconModule } from '@angular/material/icon';
import { WeatherComponent } from './components/weather/weather.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const firebaseConfig = {
  apiKey: "AIzaSyCh7DGlwqtACLg93HoL_ISxQzQc-wrIJs0",
  authDomain: "crm-project-7adb3.firebaseapp.com",
  databaseURL: "https://crm-project-7adb3-default-rtdb.firebaseio.com",
  projectId: "crm-project-7adb3",
  storageBucket: "crm-project-7adb3.appspot.com",
  messagingSenderId: "829403449686",
  appId: "1:829403449686:web:bcc82d03ffbe3fc96e2ef7",
  measurementId: "G-8SZ6TYWESD"
};


@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard] // allows in this page only if passes the guard
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard] // allows in this page only if passes the guard
      },

      {
        path: 'login',
        component: LoginPageComponent
      },

      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AngularFireAuthGuard] // allows in this page only if passes the guard
      },

      {
        path: '**', // 404 Page
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent,
    ProfileComponent,
    WeatherComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
