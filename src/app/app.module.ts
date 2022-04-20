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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

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
    DisplaybooksComponent,
  ],
  imports: [
    BrowserModule, MatInputModule, MatCheckboxModule, MatGridListModule, FormsModule, MatIconModule, MatDialogModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
