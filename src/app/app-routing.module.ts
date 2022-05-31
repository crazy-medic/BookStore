import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Components/book/book.component';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { OrderComponent } from './Components/order/order.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: "/signup", pathMatch: 'full' },
  {path:"signup",component:SignupComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"resetpassword",component:ResetpasswordComponent},
  {
    path:"dashboard",component:DashboardComponent,
    children:[
      {path:"book",component:BookComponent},
      {path:"cart",component:CartComponent},
      {path:"feedback",component:FeedbackComponent},
      {path:"order",component:OrderComponent},
      {path:"wishlist",component:WishlistComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
