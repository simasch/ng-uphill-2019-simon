import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-screen.component.html'
})
export class DoneScreenComponent implements OnInit {

  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  private loadToDos() {
    const todoContainer = this.todoService.loadToDos();
    this.doneToDos = todoContainer.done;
  }

}
