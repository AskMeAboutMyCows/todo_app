import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListRoutingModule } from './components/todo-list/todo-list-routing.module';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent }
];

@NgModule({

  declarations: [
    TodoListComponent
  ],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
