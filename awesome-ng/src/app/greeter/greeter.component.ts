import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-greeter',
  styles: [`
    h3 {
      color: red;
    }`],
  template: `
    <h3>{{ title }}</h3>

    <input [(ngModel)]="title">
  `
})
export class GreeterComponent {

  title = 'Greetings from Gurten';
}
