import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Constant } from './model/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockmarket';
  isEnable:boolean=Constant.isLogged;
  isLoggedIn!: boolean;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  
}
