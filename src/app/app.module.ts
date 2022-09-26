import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Issue1Component } from './issue1/issue1.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './navigation/home/home.component';
import { UsersComponent } from './navigation/users/users.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, Issue1Component, ServiceTestComponent, TodosComponent, ObservableTestComponent,LoginComponent, NavigationComponent, HomeComponent, UsersComponent, ProfileComponent, PageNotFoundComponent    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
