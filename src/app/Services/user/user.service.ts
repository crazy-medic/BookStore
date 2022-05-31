import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  getheaderobj() {
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return headerObj;
  }

  signup(data: {}) {
    return this.httpservice.postService('User/Register', data, false, this.getheaderobj());
  }

  login(data: {}) {
    console.log(data);
    return this.httpservice.postService('User/Login', data, false, this.getheaderobj());
  }

  forgot(value: any) {
    throw new Error('Method not implemented.');
  }

  saveaddress(payload: { addressType: string; fullAddress: any; city: any; state: any; }) {
    throw new Error('Method not implemented.');
  }
}
