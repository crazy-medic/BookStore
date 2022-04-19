import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderComponent } from './Components/order/order.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddressComponent } from './Components/address/address.component';
import { BookComponent } from './Components/book/book.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    WishlistComponent,
    CartComponent,
    AddressComponent,
    BookComponent,
    FeedbackComponent,
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DisplaybooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
