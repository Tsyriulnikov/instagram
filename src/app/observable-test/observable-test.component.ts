import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, map, Observable, of} from "rxjs";
import {Todo} from "../services/todos.service";

@Component({
    selector: 'inst-observable-test',
    templateUrl: './observable-test.component.html',
    styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {
    // observable = new Observable(observer => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.complete();
    // })
    observable = of(1, 2)
    observer = {
        next: (value: any) => console.log(value), // 1, 2
        error: (error: any) => console.error(error), //
        complete: () => console.log("completed") // completed
    };

    // timer = new Observable(observer => {
    //   // объявляем счетчик
    //   let counter = 0;
    //  const intervalId = setInterval(() => {
    //     // передаем значение счетчика
    //     // наблюдателю и увеличиваем его на единицу
    //     observer.next(counter++);
    //   }, 1000);
    //   return () => {
    //     clearInterval(intervalId);
    //   }
    // });
    timer = interval(1000)


    constructor() {

    }

    ngOnInit(): void {
        this.observable.subscribe(this.observer);

        const subscription = this.timer.subscribe({next: console.log});
// поток завершится через 5 секунд
        setTimeout(() => subscription.unsubscribe(), 5000);

        of(1,2,3).pipe(
            map(value => value * 2)
        ).subscribe({
            next: console.log
        });

    }

}
