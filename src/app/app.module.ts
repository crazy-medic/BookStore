import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderComponent } from './Components/order/order.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { UserComponent } from './Components/user/user.component';
import { AddressComponent } from './Components/address/address.component';
import { BookComponent } from './Components/book/book.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    WishlistComponent,
    CartComponent,
    UserComponent,
    AddressComponent,
    BookComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
