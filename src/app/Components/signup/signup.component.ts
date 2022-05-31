import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
  loginForm !: FormGroup;
  submitted = false;
  showpass: boolean = false
  action: string = "login";

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      FullName: ['', Validators.required, Validators.minLength(3)],
      SignupEmailID: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[.]*[a-z0-9]*[@]{1}[a-z]{2,}[.]{1}[co]{2}[m]*[.]*[a-z]*$")]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Phone: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.loginForm = this.formBuilder.group({
      LoginEmailId: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z]{3,}[.]*[a-z0-9]*[@]{1}[a-z]{2,}[.]{1}[co]{2}[m]*[.]*[a-z]*$")]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.action == "signup") {
      console.log(this.action,this.signupForm.value);
      console.log("signup called");
      if (this.signupForm.invalid) {
        return;
      }
      console.log(this.signupForm.value)
      this.userService.signup(this.signupForm.value).subscribe((response: any) => {
        console.log(response);
      })
    }
    if (this.action == "login") {
      console.log(this.action,this.loginForm.value);
      console.log("login called");
      if (this.loginForm.invalid) {
        return;
      }
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  toggle() {
    this.showpass = !this.showpass;
  }

  loginaction() {
    this.action = "login"
  }

  signupaction() {
    this.action = "signup"
  }
}
