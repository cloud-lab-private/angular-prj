import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EventEmitterTestComponent } from '../event-emitter-test/event-emitter-test.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let button: ElementRef;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exceute while submit', () => {
    expect(component).toBeTruthy();
  });

  // Can directly call it and then expect the function to run when the child emits
    // (we can probably rely on Angular here, so this test really isn't necessary)
    it('should be called with whatever the counter change emits', () => {
      spyOn(component, 'getValue');
      const counter = de.query(By.directive(EventEmitterTestComponent));
      const cmp = counter.componentInstance;
      cmp.change.emit(1);
      expect(component.getValue).toHaveBeenCalledWith(1);
    });

  it('should increment the count by the amount provided', () => {
    component.count = 2;
    component.getValue(2);
    expect(component.count).toEqual(4);
  });

});
