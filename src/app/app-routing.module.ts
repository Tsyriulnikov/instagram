import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./navigation/home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./navigation/profile/profile.component";
import {TodosComponent} from "./todos/todos.component";
import {UsersComponent} from "./navigation/users/users.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'todos', component: TodosComponent},
    {path: 'users', component: UsersComponent}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
