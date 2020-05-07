import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any
  phoneNum:string
  

  constructor() { 
    this.user={
      name : 'Vikas',
      Age: '35',
      address : 'Blr',
      phone:[
        '111-222',
        '222-333-44'
      ]
  
    }

    this.phoneNum = '111-222';
  }


  ngOnInit(): void {
  }

}
