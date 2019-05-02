import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../../../../../../01-Simple-ToDo/src/app/todos/model/todo.model";

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  @Input() todos = [];
  @Output() completeToDo = new EventEmitter();

  public complete(todo: ToDo) {
    this.completeToDo.emit(todo);
  }

}
