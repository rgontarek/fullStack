
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

    // // Production Get All Users
    // this.http.get('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users').subscribe((data) => {
    //   console.log(data);
    // });

    // // Production Get User by Id
    // this.http.get('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Production Post
    // this.http.post('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users', 
    // {"firstname":"Qwer",
    //   "lastname":"Qwer", 
    //   "password":"qwerqwer", 
    //   "phone":"1234123412", 
    //   "email":"tyur@rtyu.com"}).subscribe((data) => {
    //   console.log(data)
    // });

    // // Production Delete
    // this.http.delete('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users/8').subscribe((data) => {
    //   console.log(data);
    // })

    // // Production Put
    // this.http.put('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/production/users/4', 
    // {"firstname":"Asdf",
    //   "lastname":"Asdf", 
    //   "password":"asdfasdf", 
    //   "phone":"1234123412", 
    //   "email":"me@me.com"}).subscribe((data) => {
    //   console.log(data)
    // }, (err) => {
    //   console.log(err)
    // });
    



    // // Beta Get All Users
    // this.http.get('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/beta/users').subscribe((data) => {
    //   console.log(data);
    // });

    // // Beta Get User by Id
    // this.http.get('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/beta/users/4').subscribe((data) => {
    //   console.log(data);
    // });

    // // Beta Post
    // this.http.post('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/beta/users', 
    // {"user_id": 4,
    //   "firstname":"Asdf",
    //   "lastname":"Asdf", 
    //   "password":"asdfasdf", 
    //   "phone":"1234123412", 
    //   "email":"asdf@asdf.com"}).subscribe((data) => {
    //   console.log(data)
    // });

    // // Beta Put
    // this.http.put('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/beta/users/4', 
    // {"firstname":"Asdf",
    //   "lastname":"Asdf", 
    //   "password":"asdfasdf", 
    //   "phone":"1234123412", 
    //   "email":"asdf@asdf.com"}).subscribe((data) => {
    //   console.log(data)
    // });

    // // Beta Delete
    // this.http.delete('https://jpqkmhpn4k.execute-api.us-east-2.amazonaws.com/beta/users/4').subscribe((data) => {
    //   console.log(data);
    // })

  }

}
