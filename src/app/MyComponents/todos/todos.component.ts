import { Component, OnInit } from '@angular/core';

// The two dots in front of the forward slashes indicate that the module is located two levels up from the current file's directory, and then inside a directory called "Todo".
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem!: string;
  todos: Todo[];

  constructor(){
    const item = localStorage.getItem("todos");
    if (item !== null) {
      this.localItem = item;
    }
    this.todos = [];

    if(this.localItem ==null){

      this.todos=[];
    }else{
      this.todos = JSON.parse(this.localItem);
    }

    
  }
  ngOnInit(): void{

  }
  deleteTodo(todo :Todo){
  const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo :Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo :Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active =! this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
    
}
