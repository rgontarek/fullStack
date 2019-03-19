
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title:any = "";

  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.http.get('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users/3').subscribe((data) => {
      // console.log(data);
      this.title = data;
    });

  }

}
