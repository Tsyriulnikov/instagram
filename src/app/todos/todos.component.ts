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
        const randomNamber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNamber
        this.todosService.createTodo(title)
    }

    deleteTodo() {
        const todoId = 'jnjnjnj'
        this.todosService.deleteTodo(todoId)
    }
}
