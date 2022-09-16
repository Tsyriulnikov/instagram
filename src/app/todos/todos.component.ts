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

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getTodos()
    }

    getTodos() {
        this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            withCredentials: true,
            headers: {
                'api-key': 'fe698d58-4d10-4f41-a217-bc0f632c98e5'
            },
        })
            .subscribe((res) => {
                this.todos = res
            })

    }
}
