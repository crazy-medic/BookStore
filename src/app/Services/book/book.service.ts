import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  changeQty(_id: any, req: { quantityToBuy: number; }) {
    throw new Error('Method not implemented.');
  }

  token: any;

  constructor(private https:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getheaders() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return header;
  }

  getcarts(){
    return this.https.getService('/Cart/Get',true,this.getheaders()).subscribe((response:any)=>{
      console.log(response);
    })
  }

  addtocart(){

  }

  removefromcart(data:any){
    let url = "/Cart/Remove"
    return this.https.deleteService(url,this.getheaders());
  }

  checkout(data: { orders: any; }) {
    throw new Error('Method not implemented.');
  }
}
