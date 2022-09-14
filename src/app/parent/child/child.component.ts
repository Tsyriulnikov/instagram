import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from "../parent.component";

export interface Grade {
    liter: number
    phisic: number
}

@Component({
    selector: 'inst-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    inputGrade = ''

    @Input() surnameProps ?: string
    @Input() addressCity ?: Address
    @Output() sendGradeEvent = new EventEmitter<number>()
    @Output() sendObjectGradeEvent = new EventEmitter<Grade>()
    @Output() sendInputGradeEvent = new EventEmitter<string>()

    constructor() {
    }

    ngOnInit(): void {
    }

    sendGradeHandler() {
        const math = 5;
        this.sendGradeEvent.emit(math)
    }

    sendObjectGrade() {
        const liter = 3
        const phisic = 2
        this.sendObjectGradeEvent.emit({liter, phisic})
    }

    sendInputGradeHandler() {
        this.sendInputGradeEvent.emit(this.inputGrade)
    }
}
