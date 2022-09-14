import {Component, OnInit} from '@angular/core';

interface Fruit {
    id: string
    name: string
    price: number
}

@Component({
    selector: 'inst-issue1',
    templateUrl: './issue1.component.html',
    styleUrls: ['./issue1.component.css']
})
export class Issue1Component implements OnInit {
    fruits: Fruit[] = [
        {id: '1', name: 'apple', price: 10},
        {id: '2', name: 'orange', price: 20},
        {id: '3', name: 'watermelon', price: 30},
        {id: '4', name: 'bananas', price: 5},
        {id: '5', name: 'pears', price: 12},
        {id: '6', name: 'raspberries', price: 18},
        {id: '7', name: 'avocados', price: 14},
        {id: '8', name: 'mangoes', price: 3},
        {id: '9', name: 'kiwifruit', price: 7}
    ]


    constructor() {
    }

    ngOnInit(): void {
    }

}
