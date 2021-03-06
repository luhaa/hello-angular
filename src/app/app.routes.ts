import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'todo', redirectTo: 'todo/ALL'},
  {path: 'login', component: LoginComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
