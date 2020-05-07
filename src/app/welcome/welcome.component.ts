import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   name = ''

   welcomeMessageFromService:String;
   errorMessage:String;
  constructor(private route:ActivatedRoute, private welcomeDataService:WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
   // console.log(this.welcomeDataService.callWelcomeDataService());
   //making asynchronous call 
    this.welcomeDataService.callWelcomeDataService().subscribe(
      response=> this.responseFromDataService(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageParameter(){
    // console.log(this.welcomeDataService.callWelcomeDataService());
    //making asynchronous call 
     this.welcomeDataService.callWelcomeDataServiceWithPathVariable(this.name).subscribe(
       response=> this.responseFromDataService(response),
       error => this.handleErrorResponse(error)
     );
   }

  responseFromDataService(response){
    this.welcomeMessageFromService= response.message;

  }

  handleErrorResponse(error){
    // console.log('here' + error.error);
    // console.log('here ++' +error.error.message);

    this.errorMessage= error.error.message;
  }

}
