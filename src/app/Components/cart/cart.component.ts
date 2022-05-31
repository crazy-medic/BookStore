import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book/book.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  book: any;
  cartcount: any;
  cartbooks: any[] = [];
  orderlist: any = [];
  book_qty = 1;
  userForm!: FormGroup;
  submitted = false;
  step1: any;
  step1button: boolean = true;
  step2: any;
  step2button: boolean = true;
  address: any;
  fullName: any;
  phone: any;
  disabled: boolean = true;
  userId: any

  constructor(private books: BookService, private formbuilder: FormBuilder, private user: UserService, private route: Router, private activatedroute: ActivatedRoute) {
    this.fullName = localStorage.getItem('fullName');
    this.phone = localStorage.getItem('phone');
  }

  ngOnInit(): void {
    this.getcartlist();
    this.userForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required, Validators.minLength(6)]
    })
    this.userId = this.activatedroute.snapshot.paramMap.get("userId");
  }

  getcartlist() {
    this.books.getcarts()
    // .subscribe((response: any) => {
    //   console.log(response);
    //   this.cartcount = response.result
    //   this.cartbooks = response.response;
    //   console.log(this.cartbooks)
    //   for (this.book of this.cartbooks) {
    //     this.address = {
    //       "fullName": this.book.fullName,
    //       "phone": this.book.user_id
    //     }
    //     this.userForm.patchValue({
    //       "fullName": this.address.fullName,
    //       "mobileNo": this.address.mobileNo
    //     });
    //     console.log(this.address);
    //   }
    // })
  }

  negative(book: any) {
    if (this.book_qty > 1) {
      this.book_qty = this.book_qty - 1;
    }
    this.updatequantity(book)
  }

  positive(book: any) {
    this.book_qty = this.book_qty + 1;
    this.updatequantity(book)
  }

  updatequantity(book: any) {
    let req = {
      "quantityToBuy": this.book_qty
    }
    this.books.changeQty(book.product_id._id, req)
    // .subscribe((response: any) => {
    //   console.log(response);
    // })
  }

  setStep(index: any) {
    if (index == 1) {
      if (this.cartcount >= 1) {
        this.disabled = false;
        this.step1 = true;
        this.step1button = false;
      }
    }
    else if (index == 2) {
      if (this.userForm.valid) {
        this.step2 = true;
        this.step2button = false;
      }
    }
  }

  removecartitem(book: any) {
    this.books.removefromcart(book._id).subscribe((response: any) => {
      console.log(response);
    })
    this.getcartlist();
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      let payload = {
        addressType: "Home",
        fullAddress: this.userForm.value.address,
        city: this.userForm.value.city,
        state: this.userForm.value.state,
      }
      this.user.saveaddress(payload)
      // .subscribe((response: any) => {
      //   console.log(response);
      // })
    }
    else {
      console.log("Please fill the form");
    }
  }

  ordersummary() {
    if (this.cartcount >= 1 && this.userForm.valid) {
      this.cartbooks.forEach((element: any) => {
        console.log(element);
        this.orderlist.push({
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.product_id.quantityToBuy,
          "product_price": element.product_id.price
        })
      });
      let data = {
        "orders": this.orderlist
      }
      this.books.checkout(data)
      // .subscribe((response: any) => {
      //   console.log(response);
      // })
    }
    this.route.navigateByUrl("/dashboard/ordered")
  }

  order() {
    this.route.navigateByUrl("/dashboard/ordered")
  }
}