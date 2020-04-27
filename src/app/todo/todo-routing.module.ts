import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { TodoComponent } from './todo.component';
import { Shell } from '@app/shell/shell.service';
import {CreateUserComponent} from "@app/todo/create-user/create-user.component";

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: TodoComponent, data: { title: extract('Todo') } },
    { path: 'register', component: CreateUserComponent, data: { title: extract('RegisterUser') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TodoRoutingModule {}
