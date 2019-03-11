import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAuth(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ' ' + password);
  }

}
