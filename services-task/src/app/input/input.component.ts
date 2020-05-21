import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../shared/numbers.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public num: number;

  constructor(private numbersService: NumbersService) {

  }

  ngOnInit(): void {
  }

  sendNumber(): void {
    this.numbersService.getNewNumber(this.num);
  }

}
