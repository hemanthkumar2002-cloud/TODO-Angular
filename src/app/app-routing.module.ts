import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home/home.component';
import { TasksComponent } from './core/tasks/tasks/tasks.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'task', component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
