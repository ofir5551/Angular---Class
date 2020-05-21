import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../shared/numbers.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  private sum: number;

  constructor(private numbersService: NumbersService) {
    this.numbersService.eventEmitterSum.subscribe(sum => {
      this.sum = sum;
      alert(`Sum: ${this.sum}`)
    })
  }

  ngOnInit(): void {
  }

}
