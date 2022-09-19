import {Component, OnInit, OnDestroy} from '@angular/core';
import {Todo, TodosService} from "../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
    selector: 'inst-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
    todos: Todo[] = []
    error = ''
    subscriptions: Subscription = new Subscription()

    constructor(private todosService: TodosService) {
    }

    ngOnInit(): void {
        this.getTodos()
    }

    ngOnDestroy(): void {

    }

    getTodos() {
        this.subscriptions.add(this.todosService.getTodos().subscribe({
                next: (res: Todo[]) => {
                    this.todos = res
                },
                error: (error: HttpErrorResponse) => {
                    this.error = error.message
                },
            })
        )
    }


    createTodo() {
        const randomNamber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNamber
        this.subscriptions.add(this.todosService.createTodo(title).subscribe({
                next: (res) => {
                    const newTodo = res.data.item
                    this.todos.unshift(newTodo)
                },
                error: (error: HttpErrorResponse) => {
                    this.error = error.message
                },
            })
        )
    }

    deleteTodo() {
        const todoId = this.todos[0].id
        this.subscriptions.add(this.todosService.deleteTodo(todoId).subscribe({
                next: () => {
                    this.todos = this.todos.filter(tl => tl.id !== todoId)
                },
                error: (error: HttpErrorResponse) => {
                    this.error = error.message
                }
            })
        )
    }


}
