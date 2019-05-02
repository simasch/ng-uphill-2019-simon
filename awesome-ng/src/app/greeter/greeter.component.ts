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

    <ul>
      <li *ngFor="let person of people">
        {{ person }}
      </li>
    </ul>

    <p>
      <button (click)="addPerson()">Add Person</button>
    </p>

    <a routerLink="/">Home</a>
  `
})

export class GreeterComponent {

  people = ['Simon', 'Peter', 'Max'];

  title = 'Greetings from Gurten';
  name = 'Your name';

  public sayHello(value: string) {
    this.title = value;
  }

  addPerson() {
    this.people.push('Person');
  }
}
