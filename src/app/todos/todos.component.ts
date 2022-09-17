import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
    addedDate: string
    id: string
    order: number
    title: string
}

interface CreateTodoResponse {
    data: {
        item: Todo
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
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
        const randomNamber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNamber
        this.http.post<CreateTodoResponse>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpOptions)
            .subscribe(res => {
            const newTodo=res.data.item
                this.todos.unshift(newTodo)
            })
    }

    deleteTodo() {

    }
}
