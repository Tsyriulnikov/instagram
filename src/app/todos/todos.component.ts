import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
    addedDate: string
    id: string
    order: number
    title: string
}

@Component({
    selector: 'inst-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = []
    httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': 'fe698d58-4d10-4f41-a217-bc0f632c98e5'
        }
    }

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getTodos()
    }

    getTodos() {
        this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
            .subscribe((res) => {
                this.todos = res
            })
    }

    createTodo() {
this.http.post()
    }

    deleteTodo() {

    }
}
