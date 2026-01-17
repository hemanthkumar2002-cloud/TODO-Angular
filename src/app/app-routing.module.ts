import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home/home.component';
import { TasksComponent } from './core/tasks/tasks/tasks.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {path:'home' , component: HomeComponent, canActivate:[AuthGuardService]},
  {path:'task', component:TasksComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
