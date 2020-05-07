import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private testService : TestService,private http :HttpClient) {
    this.testService.printToConsole('print me ');
   }

  ngOnInit(): void {
    let obs = this.http.get("https://github.com/vikascu03/config-server");
    obs.subscribe((resp)=>console.log(resp));
  }

}
