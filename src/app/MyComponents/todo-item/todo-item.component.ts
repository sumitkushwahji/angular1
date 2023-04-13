import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{


  @Input()
  todo!: Todo;
  @Input()
  i!: number;
  // the ! operator is used to tell TypeScript that the todo property will be assigned a value later on, and that it doesn't need to be initialized in the constructor. 

  @Output() todoDelete : EventEmitter<Todo> =new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> =new EventEmitter();
  
  constructor(){}
  
  ngOnInit(): void {
    // This method will be called after the component has been initialized and its properties have been set.
    // You can add any initialization logic here.
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("oncLick event has been triggered")
    // throw new Error('Method not implemented.');
    }

    onCheckBoxclick(todo:Todo){
      this.todoCheckbox.emit(todo);
    }
}
