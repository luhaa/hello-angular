import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {routing} from './todo.routes';

import {TodoComponent} from './todo.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoService} from './todo.service';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})
export class TodoModule {
}
