import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template: '<h1>{{message}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message1='welcome to new angular';
  textMessage:String = 'Hello Bar1';

}
