import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ValueService {
    // value = 91
value$:BehaviorSubject<number> = new BehaviorSubject<number>(0)
    addValue() {
       this.value$.next(this.value$.getValue()+1)
        // this.value = this.value + 1
    }
}
