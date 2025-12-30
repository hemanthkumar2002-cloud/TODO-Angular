import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TODO } from '../../Entity/TODO';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{


  todoForm! : FormGroup;
  todos : TODO[] = [];

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
      this.todoForm = this.fb.group({
        task: ['',[Validators.required,Validators.minLength(3)]]
      });
  }

  addTodo(){
    if(this.todoForm.valid){
      this.todos.push({
        task: this.todoForm.value.task,done: false
      });
      this.todoForm.reset();
    }
  }

  toggleDone(index: number){
    this.todos[index].done=! this.todos[index].done;
  }

  deleteTodo(index: number){
    this.todos.splice(index,1);
  }
}
