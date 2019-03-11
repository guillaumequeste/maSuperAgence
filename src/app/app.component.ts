import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDe-S3VlBrKHeW5shuucfCKth4C74V6_Bc',
      authDomain: 'masuperagence-dac83.firebaseapp.com',
      databaseURL: 'https://masuperagence-dac83.firebaseio.com',
      projectId: 'masuperagence-dac83',
      storageBucket: 'masuperagence-dac83.appspot.com',
      messagingSenderId: '589760904942'
    };
    firebase.initializeApp(config);
  }

}
