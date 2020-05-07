import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public userName:string,
    public description:string,
    public done: boolean,
    public targetDate:Date
  )
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos= [
  //   new Todo(1,'Learn Angular',false,new Date()),
  //   new Todo(1,'Master Angular',false,new Date()),
  //   new Todo(1,'Learn React',false,new Date())

  //   // {id:1,description:'Learn Angular'},
  //   // {id:2,description:'Master Angular'},
  //   // {id:3,description:'Learn React'}
  // ]

  todos= []
  deleteMessage:String

  // todo= {
  //     id :1,
  //     description :'Learn Angular'
  // }

  constructor(private todoDataService:TodoDataService , private router:Router) { }

  ngOnInit(): void {
   this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.callTodoService('in28Minutes').subscribe(
      response=> {
        console.log(response);
        this.todos= response;
      }
    )
  }

  deleteTodo(id){
    this.todoDataService.deleteTodoService('in28Minutes',id).subscribe(
      response=>{
        console.log(response);
        this.deleteMessage=`delete succsful for ${id}`;
        this.refreshTodos();

      }
    )

  }


  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }



}
