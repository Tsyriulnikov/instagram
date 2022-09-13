import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../parent.component";

@Component({
    selector: 'inst-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() surnameProps ?: string
    @Input() addressCity ?: Address

    constructor() {
    }

    ngOnInit(): void {
    }

}
