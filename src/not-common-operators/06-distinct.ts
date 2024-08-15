import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1,"1",1,2,3,3,4,4,5,3,1);

numeros$.pipe(
    distinct()
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
        nombre: "superman"
    },
    {
        nombre: "joker"
    },
    {
        nombre: "kumi"
    }, 
    {
        nombre: "zero"
    },
    {
        nombre: "superman"
    },
]

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);