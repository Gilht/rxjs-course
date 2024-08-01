import { filter, from, range } from "rxjs";

interface Personaje {
    nombre: string,
    tipo: string
}

range(1, 10).pipe(
    filter( (val, i) => {
        return val % 2 === 1;
    })
)

const personajes: Personaje[] = [
    {
        nombre: "superman",
        tipo: "heroe"
    },
    {
        nombre: "joker",
        tipo: "villano"
    },
    {
        nombre: "batman",
        tipo: "heroe"
    }
];

from(personajes).pipe(
    filter(p => p.tipo !== "heroe")
).subscribe(console.log)