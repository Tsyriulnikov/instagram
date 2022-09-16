import {Component, OnInit} from '@angular/core';
import {ValueService} from "../services/value.service";
import {Observable} from "rxjs";

@Component({
    selector: 'inst-service-test',
    templateUrl: './service-test.component.html',
    styleUrls: ['./service-test.component.css'],
// providers:[ValueService]
})
export class ServiceTestComponent implements OnInit {

    // value = 0
    value$ = new Observable()

    constructor(private valueService: ValueService) {
    }

    ngOnInit(): void {

        // this.value = this.valueService.value
        // this.valueService.value$.subscribe(value => this.value = value)
        this.value$ = this.valueService.value$
    }

    addButtonHandler() {
        this.valueService.addValue()
    }
}
