import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "stop timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, "click");

//SE COMPLETARA HASTA QUE EL SEGUNDO OBSERVABE TAMBIEN EMITA 
//PRIMERO EMITE EL INTERVAL Y ESPERA EL CLICK PARA DETENERSE
counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({ 
    next: val => console.log("next", val),
    complete: () => console.log("complete"),
});