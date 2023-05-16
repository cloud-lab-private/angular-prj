import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-spy-test',
  templateUrl: './spy-test.component.html',
  styleUrls: ['./spy-test.component.css']
})
export class SpyTestComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  count = 0;
  config = {};
  data: any;

  calculate(a:number,b:number){
    this.count = (a * b) + 100
    return this.count;
  }

  saveConfigLocally(param:any){
    this.config = param;
  }

  saveData(){
    let req_params = {
      count : this.calculate(10,10),
      name : "sam"
    };
    this.saveConfigLocally(req_params);
    this.service.getUsers().subscribe(response => {
      this.data = response;
    })
  }

}
