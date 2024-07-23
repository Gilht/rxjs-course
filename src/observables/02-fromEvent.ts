import { fromEvent } from "rxjs";

// Eventos del dom
const myObser$ = fromEvent<MouseEvent>(document, 'click');
const myObser2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = { 
    next: val => console.log("my value", val)
}

myObser$.subscribe( ({x, y}) => {
    console.log(x, y);
});

myObser2$.subscribe( evento => {
    console.log(evento.key)
})