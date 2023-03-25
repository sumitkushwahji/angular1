import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(){
    this.todos=[
      {
      sno : 0,
    title: "JAVA BACKEND",
    desc : "this is backend application",
    active : true
    },
      {
      sno : 1,
    title: "JAVA BACKEND",
    desc : "this is backend application",
    active : true
    },
      {
      sno : 2,
    title: "c BACKEND",
    desc : "this is backend application",
    active : true
    },
      {
      sno : 3,
    title: "computer networking",
    desc : "Networking application",
    active : true
    },
      {
      sno : 4,
    title: " digital logic",
    desc : "Electronics Engineering",
    active : false
    }
  
  
  
  
  ]
  }
  ngOnInit(): void{

  }

}
