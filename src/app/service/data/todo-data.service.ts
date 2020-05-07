import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  callTodoService(name){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
    //console.log("welcome data service called");
  }

  deleteTodoService(name,id){
    return this.http.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    //console.log("welcome data service called");
  }

  callTodoServiceForId(name,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${name}/todos/${id}`);
    //console.log("welcome data service called");
  }

  updateTodoService(name,id,todo){
    return this.http.put(`http://localhost:8080/users/${name}/todos/${id}`,
                         todo);
    //console.log("welcome data service called");
  }

  createTodoService(name,id,todo){
    return this.http.post(`http://localhost:8080/users/${name}/todos`,
                         todo);
    //console.log("welcome data service called");
  }
}
