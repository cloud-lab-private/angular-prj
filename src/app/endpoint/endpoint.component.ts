import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent implements OnInit {

  name = "user";
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  getUsersResponse()
  {
      this.service.getUsers().subscribe(response=>{
        if(response !== null)
        {
          return true;
        } else{
          return false;
        }
      })
  }
}
