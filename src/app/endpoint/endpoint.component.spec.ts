import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from '../service.service';

import { EndpointComponent } from './endpoint.component';

describe('EndpointComponent', () => {
  let component: EndpointComponent;
  let fixture: ComponentFixture<EndpointComponent>;
  let service:jasmine.SpyObj<ServiceService>;
  service = jasmine.createSpyObj<ServiceService>('ServiceService', [
    'getUsers'
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndpointComponent ],
      providers:[{provide:ServiceService,useValue:service}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expected user', () => {
    expect(component.name).toBe("user");
  });

  it('should test html element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".user").textContent).toContain('User');
  });

  it('spy based methods', () => {
    //spyOn(service,'getUsers');
   // let response = component.getUsersResponse();
    expect(service.getUsers).toHaveBeenCalled();
  });
});
