import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  templateUrl: './todo-screen.component.html',
})
export class TodoScreenComponent implements OnInit {

  newToDoTitle = '';
  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo) {
    this.todos.push(todo);
    this.todoService.saveToDos(this.todos);
    this.newToDoTitle = '';
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoService.saveToDos(this.todos);
    this.loadToDos();
  }

  // currently not used ...
  removeToDo(todo: ToDo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.todoService.saveToDos(this.todos);
  }

  private loadToDos() {
    const todoContainer = this.todoService.loadToDos();
    this.todos = todoContainer.todos;
  }

}
