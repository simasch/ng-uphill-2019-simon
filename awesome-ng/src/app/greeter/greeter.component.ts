import {Component, OnInit} from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-greeter',
  styles: [`
    h3 {
      color: red;
    }`],
  template: `
    <h3>{{ title }}</h3>

    <input [(ngModel)]="title">

    <button (click)="sayHello()">Say Hello</button>
  `
})
export class GreeterComponent {

  title = 'Greetings from Gurten';

  public sayHello() {
    this.title = new Date().toLocaleString();
  }
}
