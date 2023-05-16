import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServiceService } from '../service.service';

import { SpyTestComponent } from './spy-test.component';

fdescribe('SpyTestComponent', () => {
  let component: SpyTestComponent;
  let fixture: ComponentFixture<SpyTestComponent>;
  let service:ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyTestComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveData', () => {
    //let base_Url:string ="https://catfact.ninja/fact";
    spyOn(component, "calculate").and.returnValue(1000);
    spyOn(component,"saveConfigLocally").and.stub();
   // let service = fixture.debugElement.injector.get(ServiceService);
   /////////////////////////////1//////////////////////////////
   spyOn(service,"getUsers").and.callFake(()=>{
    return of({
      "statusCode":200
    })
   });
   component.saveData();
   expect(component.data).toEqual({
     "statusCode" : 200
   });
   expect(component.calculate).toHaveBeenCalled();
   ////////////////////////////////2////////////////////////
  //  const userServiceSpy = spyOn(service,"getUsers").and.callThrough();
  //  expect(userServiceSpy).not.toHaveBeenCalled();
    //expect(userServiceSpy).toHaveBeenCalledTimes(1);
  });

});
