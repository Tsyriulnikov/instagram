import {Component, OnInit} from '@angular/core';
import {ValueService} from "../services/value.service";

@Component({
    selector: 'inst-service-test',
    templateUrl: './service-test.component.html',
    styleUrls: ['./service-test.component.css'],
// providers:[ValueService]
})
export class ServiceTestComponent implements OnInit {

    constructor(private valueService: ValueService) {
    }

    ngOnInit(): void {
    }

}
