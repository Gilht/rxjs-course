import { interval, timer } from "rxjs";

const observer = { 
    next: val => console.log("next:", val),
    complete: () => console.log("complete"),
}

const scheduleDate = new Date();
scheduleDate.setSeconds(scheduleDate.getSeconds() + 5);

const interval$ = interval(1000);
const timer$ = timer(scheduleDate);

console.log("inicio");
timer$.subscribe(observer);
console.log("fin");