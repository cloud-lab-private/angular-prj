import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ServiceService } from './service.service';

fdescribe('ServiceService', () => {
  let service: ServiceService;
  let httptestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ServiceService);
    httptestingController =TestBed.get(HttpTestingController);
  });

  it('Add two numbers', () => {
    expect(service.add(1,2)).toBe(3);
  });



  it("end point check",()=>{
    let result:any;
    let base_url = "https://catfact.ninja/fact";

    const response = {
      
        "fact": "A cat's normal pulse is 140-240 beats per minute, with an average of 195.",
        "length": 73
    
    }
      
    service.getUsers().subscribe(data=>{
      console.log(result);
      result = data;
    });

   const retrievedResponse = httptestingController.expectOne({
      method:"get",
      url:base_url
    });

    retrievedResponse.flush(response);
    expect(result).toEqual(response);

  });
});
