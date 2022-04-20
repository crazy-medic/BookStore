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
  submitted = false;
  showpass:boolean= false

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      FullName: ['', Validators.required,Validators.minLength(3)],
      EmailID: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value)
    this.userService.signup(this.signupForm.value).subscribe((response:any)=>{
      console.log(response);
    })
  }

  toggle(){
    this.showpass = !this.showpass;
  }
}
