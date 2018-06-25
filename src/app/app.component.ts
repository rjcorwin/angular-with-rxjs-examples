import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title$    
  title
  constructor() {
    this.title$  = new Observable(observer => {
      setInterval(_ => observer.next(Math.floor((Math.random() * 10) + 1)), 1000)
    })
    this.title$.subscribe(newValue => this.title = newValue)
  }
}
