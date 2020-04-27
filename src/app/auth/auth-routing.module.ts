import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { LoginComponent } from './login.component';
import {Shell} from "@app/shell/shell.service";
import {TodoComponent} from "@app/todo/todo.component";

const routes: Routes = [{ path: 'login', component: LoginComponent, data: { title: extract('Login') } }];

// const routes: Routes = [
//   Shell.childRoutes([
//     { path: '', redirectTo: '/login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
//   ]),
// ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
