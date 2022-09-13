import {Component, OnInit} from '@angular/core';

export interface Address {
    city: string
    street: string
    house: string
}


@Component({
    selector: 'inst-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    name = "Ivan"
    surname = "Petrov"
    address: Address = {
        city: 'Anapa',
        street: 'Gogol',
        house: '168'
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
