import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoScreenComponent} from './todos/components/todo-screen/todo-screen.component';
import {NewTodoComponent} from './todos/components/new-todo/new-todo.component';
import {DoneScreenComponent} from './todos/components/done-screen/done-screen.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoScreenComponent,
    NewTodoComponent,
    DoneScreenComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
