import { Component } from '@angular/core';
import { RandomNumberService } from './random-number.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomNumber: number;
  constructor(randomNumberService: RandomNumberService) {
    randomNumberService.numberStream$.subscribe((newValue:number) => this.randomNumber = newValue)
  }
}
