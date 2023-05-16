import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  count:number;
  constructor() {
     this.count = 1;
   }

  ngOnInit(): void {
  }
   
  increment()
  {
    this.count++;
  }

  decrement()
  {
    this.count--;
  }

}
