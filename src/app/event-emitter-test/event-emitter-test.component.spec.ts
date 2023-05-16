import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventEmitterTestComponent } from './event-emitter-test.component';

describe('EventEmitterTestComponent', () => {
  let component: EventEmitterTestComponent;
  let fixture: ComponentFixture<EventEmitterTestComponent>;
  let de: DebugElement;
  let button: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitterTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEmitterTestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    de = fixture.debugElement;
    button = de.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // To test values are emitting properly thro'event emitters
   it('should emit when the button is clicked', () => {
    spyOn(component.change, 'emit');
    button.nativeElement.click(); // mock a click on the button
    expect(component.change.emit).toHaveBeenCalledWith(1);
  });
  it('should emit when onClick() is called', () => {
    spyOn(component.change, 'emit');
    component.onClick(); // call the onClick method directly
    expect(component.change.emit).toHaveBeenCalledWith(1);
  });

  it('should emit when the button is clicked', () => {
    component.change.subscribe(next => {
      expect(next).toEqual(1);
    });
    button.nativeElement.click();
  });
});
