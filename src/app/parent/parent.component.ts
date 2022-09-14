import {Component, OnInit} from '@angular/core';
import {Grade} from "./child/child.component";

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
    math ?: number
    liter ?: number
    phisic ?: number
    inputGrades: Array<string> = []

    constructor() {
    }

    ngOnInit(): void {
    }

    getGrade(value: number) {
        this.math = value
    }

    getObjectGrade(value: Grade) {
        this.liter = value.liter
        this.phisic = value.phisic
    }

    getInputGrade(grade: string) {
        this.inputGrades.push(grade)
    }
}
