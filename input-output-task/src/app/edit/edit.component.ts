import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() public editEmitter: EventEmitter<string> = new EventEmitter<string>();

  changeName(newName): void {
    this.editEmitter.emit(newName);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
