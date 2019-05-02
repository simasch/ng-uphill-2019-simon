import {Component} from '@angular/core';

@Component({
  selector: 'app-greeter',
  styles: [`
    h3 {
      color: red;
    }`],
  template: `
    <h3>{{ title }} {{ name }}</h3>

    <p>
      <input #thatsMyVariable [value]="title">
    </p>
    <p>
      <input [(ngModel)]="name">
    </p>
    <p>
      <button (click)="sayHello(thatsMyVariable.value)">Say Hello</button>
    </p>
  `
})
export class GreeterComponent {

  title = 'Greetings from Gurten';

  name = 'Your name';

  public sayHello(value: string) {
    this.title = value;
  }
}
