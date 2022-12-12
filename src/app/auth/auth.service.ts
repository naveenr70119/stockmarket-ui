import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   get isLoggedIn() {
//     localStorage.getItem('loggedIn') !== null;
//     return this.loggedIn.asObservable();
//   }

  constructor(
    private router: Router
  ) {}

//   login() {
//     var data=localStorage.getItem('loggedIn');
// console.log(data);
//     if (data!=null) {
//       this.loggedIn.next(true);
//       this.router.navigate(['/']);
//     }
//   }

//   logout() {
//     this.loggedIn.next(false);
//     localStorage.removeItem('loggedIn');
//     this.router.navigate(['/login']);
//   }

  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}