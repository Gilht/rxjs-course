import { fromEvent, interval, of } from "rxjs"
import { take, mergeMap, takeUntil } from "rxjs/operators"

const letras$ = of("a", "b", "c", "d")

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        take(3)
    ))
)
.subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("complete"),
})


const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup")
const interval$ = interval()

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log)