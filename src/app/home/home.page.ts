import { Component } from '@angular/core';
import { apikey } from "../../environments/apikey";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log(apikey.key);
  }

}
