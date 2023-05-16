import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  base_Url ="https://catfact.ninja/fact";

  constructor(private http:HttpClient) { }

  add(a:number,b:number){
    return a+b;
  }

  getUsers():Observable<any>
  {
    console.log("userrr");
    return this.http.get(this.base_Url);
  }
}
