import { fromEvent, interval } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "stop timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent(boton, "click");

const clickBtn$ = fromEvent(boton, "click").pipe(
    tap(() => console.log("amtes del skip")),
    skip(1),
    tap(() => console.log("despues del skip"))
)
//EMITE EL PRIMER CLICK HACIENDO QUE HASTA LA SEGUNDA EMISION SE COMPLETE EL OBS$

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({ 
    next: val => console.log("next", val),
    complete: () => console.log("complete"),
});