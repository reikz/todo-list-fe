import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import {CreateUserComponent} from "@app/todo/create-user/create-user.component";
import {FormsModule} from "@angular/forms";
import {TodoService} from "@app/todo/todo.service";
import {CheckboxModule} from "@shared/checkbox/checkbox.module";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TodoRoutingModule,
    FormsModule,
    CheckboxModule,
  ],
  declarations: [
    TodoComponent,
    CreateUserComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {}
