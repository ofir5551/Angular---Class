import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  public number: number;
  public sum: number = 0;

  public eventEmitterCurrent: EventEmitter<number> = new EventEmitter<number>();
  public eventEmitterSum: EventEmitter<number> = new EventEmitter<number>();

  getNewNumber(newNumber: number) {
    this.number = newNumber;
    this.sum += newNumber;

    this.eventEmitterCurrent.emit(this.number);
    this.eventEmitterSum.emit(this.sum);
  }

  sendToCurrent(): void {
    
  }

  sendToTotal(): void {
    
  }
}
