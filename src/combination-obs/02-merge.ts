import { fromEvent, merge } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup")


merge(
    keyup$, click$
).subscribe(console.log)

// se dispara el complete hasta que ambos terminan de emitir