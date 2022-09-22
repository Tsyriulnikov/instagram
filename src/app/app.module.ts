import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Issue1Component } from './issue1/issue1.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import { ObservableTestComponent } from './observable-test/observable-test.component';


@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, Issue1Component, ServiceTestComponent, TodosComponent, ObservableTestComponent    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
