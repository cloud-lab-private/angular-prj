import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  // login(value:any){
  //   if ('Joe' === value.id && 'password' === value.pwd) {
  //     window.alert("logged success");
  //   } else {
  //     window.alert("invalid credentials"); 
  //   }
  // }

  getValue(num:number){
     this.count += num;
  }

}
