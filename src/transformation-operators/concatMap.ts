import { fromEvent, interval } from "rxjs";
import { concatMap, mergeMap, switchMap, take } from "rxjs/operators"



const click$ = fromEvent(document, "click")
const interval$ = interval(500).pipe(take(3))

click$.pipe(
    concatMap(() => interval$)
)
.subscribe(console.log)

//EMITE LOS VALORES EN SECUENCIA YA SABE EL ORDEN DE COMO SE EJECUTAN
//EMITIRA 0,1,2 .. LUEGO 0,1,2 
//TODOS EN SECYENCIA DESPUES DE HABER FINALIZADO EL ANTERIOR 
//SIN REINICIAR NADA COMO EL SWITCHAP