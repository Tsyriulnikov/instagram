import {Component, OnInit, OnDestroy} from '@angular/core';
import {Todo, TodosService} from "../services/todos.service";
import {map, Observable, Subscription} from "rxjs";

@Component({
    selector: 'inst-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
    todos$!: Observable<Todo[]>
    error = ''

    constructor(private todosService: TodosService) {

    }

    ngOnInit(): void {
        this.todos$ = this.todosService.todos$
        this.getTodos()
    }

    ngOnDestroy(): void {

    }

    getTodos() {
        this.todosService.getTodos()
    }


    createTodo() {

    }

    deleteTodo() {
        const todoId = '8e7b52bd-4aa6-4a99-a617-a23797eaff93'
        this.todosService.deleteTodo(todoId)
    }
}
