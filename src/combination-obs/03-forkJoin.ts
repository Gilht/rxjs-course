import { fromEvent, of, interval, take, delay, forkJoin } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup")


const numero$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of("a", "b", "c", "d").pipe(delay(3500));


forkJoin()