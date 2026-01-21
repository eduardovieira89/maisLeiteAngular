import { Component, OnInit, Input } from '@angular/core';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-form-debug',
    templateUrl: './form-debug.component.html',
    styleUrls: ['./form-debug.component.css'],
    imports: [NgIf, JsonPipe]
})
export class FormDebugComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
