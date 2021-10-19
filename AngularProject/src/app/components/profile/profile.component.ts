import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('con') con: ElementRef;

  ngAfterViewInit() {
    const user = document.cookie
    document.getElementById("con").innerText = user;
  }
}
