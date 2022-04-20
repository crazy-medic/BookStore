import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }

  signup(data: {}) {
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postService('User/SignUp', data, false, headerObj);
  }
}
