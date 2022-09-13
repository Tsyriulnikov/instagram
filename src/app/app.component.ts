import {Component} from '@angular/core';

interface IUser {
    age: number
    name: string
}


@Component({
    selector: 'inst-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'instagram';
    user: IUser = {
        age: 50,
        name: 'Chuka'
    }
    isAppLoading = true
    text = ''
    textKeyUp = ''


    changeTitleHandler() {
        this.title = 'Title Changed'
    };

    constructor() {
        setTimeout(() => {
            this.isAppLoading = false
        }, 3000)
    }


    changeTextHandler($event: Event) {
        this.text = ($event.currentTarget as HTMLInputElement).value
    }

    changeTextHandlerKeyUp($event: Event) {
        this.textKeyUp = ($event.currentTarget as HTMLInputElement).value
    }
}
