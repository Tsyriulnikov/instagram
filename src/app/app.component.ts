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
    changeTitleHandler () {
        this.title='Title Changed'
    };

    constructor() {
        setTimeout(() => {
            this.isAppLoading = false
        },3000)
    }


}
