import { concat, interval, of, take } from "rxjs"

const interval$ = interval(1000)


concat( 
    interval$.pipe(
        take(3),
        take(2)
    ),
    of(1),
    [1,2,3,4]
).subscribe(console.log)

//se completa de manera secuencial (cascada)
//el complete de la suscripcion se dispara hasta que todos los combinados hayan terminado