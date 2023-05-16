import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-emitter-test',
  templateUrl: './event-emitter-test.component.html',
  styleUrls: ['./event-emitter-test.component.css']
})
export class EventEmitterTestComponent implements OnInit {

  @Output() change = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.change.emit(1);
  }

}
