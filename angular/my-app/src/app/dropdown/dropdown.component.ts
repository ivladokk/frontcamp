import {Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {DropdownValue} from '../models';
  
@Component({
    selector: 'dropdown',
    template: `
      <select>
        <option *ngFor="let value of values" (click)="select(value.value)">{{value.label}}</option>
      </select>
    `
  })

export class DropdownComponent {
    @Input() values: DropdownValue[];
  
    @Input() value: string[];
  
    @Output() valueChange: EventEmitter<string>;
  
    constructor(private elementRef:ElementRef) {
      this.valueChange = new EventEmitter();
    }
  
    select(value) {
      this.valueChange.emit(value);
    }
  }