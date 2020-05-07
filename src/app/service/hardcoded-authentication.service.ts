import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticateUser(userName , password){
  //  console.log('before '+this.isUserLoggedIn());
    if(userName === 'in28Minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser',userName);
    //  console.log('after' +this.isUserLoggedIn());
      return true
  }else{
    return false
  }
  }
  isUserLoggedIn(){
    let loggedInuser = sessionStorage.getItem('authenticatedUser');
    return !(loggedInuser===null)

  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
  constructor() { }
}
