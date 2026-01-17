import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  onLogin(userName: string, password: string): boolean{

    if(userName === 'user1@gmail.com' && password === '123'){
      localStorage.setItem('jwtToken','basic-jwt-token');
      localStorage.setItem('isLoggedin','true');

      return true;
    }
    return false;

  }

  onLogout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('isLoggedin');
  }


  isAuthenticated(){
    return !!localStorage.getItem('jwtToken');
  }
}
