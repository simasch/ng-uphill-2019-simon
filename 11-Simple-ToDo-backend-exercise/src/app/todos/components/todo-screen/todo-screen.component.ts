import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  templateUrl: './todo-screen.component.html',
})
export class TodoScreenComponent implements OnInit {

  loading = true;
  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {
    this.todos.push(todo);
    this.todoService.saveTodo(todo).subscribe(t => {
      todo.id = t.id;
    });
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoService.updateTodo(todo).subscribe(t => {
      this.loadToDos();
    });
  }

  private loadToDos() {
    return this.todoService.getTodos(false)
      .subscribe(
        todos => {
          this.todos = todos;
          this.loading = false;
        }
      );
  }
}
