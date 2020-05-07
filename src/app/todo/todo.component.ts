import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', false, new Date());
    if (this.id != -1) { 
    this.todoDataService.callTodoServiceForId('in28Minutes', this.id).subscribe(
      data => this.todo = data
    )
  }
}

saveTodo(){
  if(this.id==-1){
    this.todoDataService.createTodoService('in28Minutes', this.id, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )

  }else{
  this.todoDataService.updateTodoService('in28Minutes', this.id, this.todo).subscribe(
    data => {
      console.log(data)
      this.router.navigate(['todos'])
    }

  )
  }
}


}
