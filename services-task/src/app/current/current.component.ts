import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../shared/numbers.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  private current:number;

  constructor(private numbersService: NumbersService) {
    this.numbersService.eventEmitterCurrent.subscribe(enteredNumber => {
      this.current = enteredNumber;
      alert(`Current: ${this.current}`);
    })
    
  }
  
  ngOnInit(): void {
  }

}
