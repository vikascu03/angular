import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'in28Minutes'
  password=''
  errorMessage ='invalid credential'
  invalidCredential=false;

  constructor(private router:Router , private hardCodeedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
   if(this.hardCodeedAuthentication.authenticateUser(this.userName,this.password)){
    this.router.navigate(['welcome',this.userName])
    this.invalidCredential=false;
    // this.router.nav
   }else{
    this.invalidCredential=true;
   }
  }

}
