import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators"



const click$ = fromEvent(document, "click")
const interval$ = interval(1000)

//MANTIENE LAS SUSCRIPCIONES Y GENERA UNA NUEVA TENIENDO VARIAS EJECUCIONES AL MISMO TIEMPO
click$.pipe(
    mergeMap(() => interval$)
)
.subscribe(console.log)


//MANTIENE SOLO 1 SUSCRIPCION INTERNA ACTIVA ES DECIR DESACTIVA LA PASADA Y COMIENZA DE 0
click$.pipe(
    switchMap(() => interval$)
)
.subscribe(console.log)