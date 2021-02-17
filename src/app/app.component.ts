import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[];
  evenNumbers: number[];
  incomeNumber: number;

  onIntervalFired(incomeNumber: number): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
    this.incomeNumber = incomeNumber;
    this.incomeNumber % 2 === 0 ? this.evenNumbers.push(this.incomeNumber) : this.oddNumbers.push(this.incomeNumber);
  }
}
