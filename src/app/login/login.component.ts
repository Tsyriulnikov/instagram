import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'inst-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // email = new FormControl('')
    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('')
    })

    constructor() {
    }

    ngOnInit(): void {
    }

    get email() {
        return this.loginForm.get('email')
    }


}
