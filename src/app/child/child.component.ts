import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() boxColor;
  @Input() placeholderText;

  @Output() inputEvent = new EventEmitter();

  count: number = 0;
  onCreate(inputValue) {
    if (inputValue.value.length > 0) {
      this.count++;
      this.inputEvent.emit(inputValue.value);
    }
  }
}
