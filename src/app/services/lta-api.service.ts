import { Injectable } from '@angular/core';
import { apikey } from "../../environments/apikey";

// Make a file called apikey.ts in environments folder to put your own API key with the following format:
// export const apikey = {
//   key: "randomkeyhere",
// }

@Injectable({
  providedIn: 'root'
})
export class LTAAPIService {

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(apikey.key);
  }
}
