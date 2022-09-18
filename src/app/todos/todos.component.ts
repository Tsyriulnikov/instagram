import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../services/todos.service";

@Component({
    selector: 'inst-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = []


    constructor(private todosService: TodosService) {
    }

    ngOnInit(): void {
        this.getTodos()
    }

    getTodos() {

        this.todosService.getTodos().subscribe((res: Todo[]) => {
            this.todos = res
        })

    }


    createTodo() {
        const randomNamber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNamber
        this.todosService.createTodo(title).subscribe(res => {
            const newTodo = res.data.item
            this.todos.unshift(newTodo)
        })
    }

    deleteTodo() {
        const todoId = this.todos[0].id
        this.todosService.deleteTodo(todoId).subscribe(() => {
            this.todos = this.todos.filter(tl => tl.id !== todoId)
        })

    }
}
