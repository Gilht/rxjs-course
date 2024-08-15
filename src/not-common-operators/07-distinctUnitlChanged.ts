import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1,"1",1,2,3,3,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(console.log)

interface Personaje {
    nombre: string
}

const personajes: Personaje[]= [
    {
        nombre: "zero"
    },
    {
        nombre: "zero"
    },
    {
        nombre: "joker"
    },
    {
        nombre: "kumi"
    }, 
    {
        nombre: "ancli"
    },
    {
        nombre: "ancli"
    },
]

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);