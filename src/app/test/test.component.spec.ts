import {  DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
     htmlElement = debugElement.nativeElement;
  })

  it('checking count', () => {
    expect(htmlElement.textContent).toEqual("Number 1");
  });

  it('checking count gets incremented or decremented', () => {
    const initialValue = component.count;
    component.increment();
    fixture.detectChanges();
    const newValue = component.count;
    expect(newValue).toBeGreaterThan(initialValue);
  });
});
