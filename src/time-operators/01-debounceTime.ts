import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
// Eventos del dom
const myObser$ = fromEvent<MouseEvent>(document, 'click');

myObser$.pipe(
    debounceTime(1000)
);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");


//ESTE EJEMPLO ES PARA CUANDO SE EMITEN VALORES PARECIDOS
//PERO PARA EVITAR COLAPSO LO PONEMOS CON UN DEBOUNCE TIME Y DISTINGUIMOS ENTRE EL ULTIMO AL ACTUAL 
//DISTINGUIMOS CON EL DISCTIC UNTIL CHANGE 
input$.pipe(
    debounceTime(1000),
    distinctUntilChanged()
)
.subscribe(console.log)