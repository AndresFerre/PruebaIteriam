import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onLogin(email, password) {
    console.log('Email', email.value);
    console.log('Password', password.value);
    console.log('Validación OK');
  }

}
