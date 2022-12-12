import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Constant } from 'src/app/model/constant';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  user: User = new User();
  islogged:boolean=Constant.isLogged;
  
  error = "";
  isErrorOccured:boolean=false;
  errorMessage:any;
  loginUser!:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService,private route: Router,private authService: AuthService)
  {

  }

  ngOnInit() {
    this.loginUser = this.fb.group({
      email: ['', Validators .required ],
      password: ['', Validators .required ]
      });
  }
  

  
  
  onSubmit()
  {
this.login();
  }

  login() {
    console.log("user "+this.user)
    this.loginService.login(this.user)
      .subscribe((data:any) =>{ console.log(data)
        Constant.isLogged=true;
        localStorage.setItem('loggedIn', "true");
       // this.authService.login();
       if(this.loginUser.invalid){
        return;
      }
      this.authService.signIn(this.loginUser.value);
      this.gotocompanyList()
      }, error => { this.error = error; console.log(error);this.errorMessage="invalid user" ;this.isErrorOccured=true });
    
  }
  gotocompanyList() {
    this.route.navigate(["/companies"]).then(() => {
    window.location.reload();
    });
  }

}
