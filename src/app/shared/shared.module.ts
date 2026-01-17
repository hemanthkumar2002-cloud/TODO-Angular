import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../core/home/home/home.component';
import { TasksComponent } from '../core/tasks/tasks/tasks.component';
import { LoginComponent } from '../core/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,HomeComponent,
    TasksComponent,
    LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  exports : [HeaderComponent]
})
export class SharedModule { }
