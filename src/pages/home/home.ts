import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  dataObject : any ={

    "apple" : true,
    "orange" : true ,
    "apricot" : true ,
    "broccoli" : false  

  }

  constructor(public navCtrl: NavController) {
 
  }





}
