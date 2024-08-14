import { reduce, take } from "rxjs/operators";
import { interval } from "rxjs";


const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valActual: number) => {
    return acumulador + valActual;
}

const total = numbers.reduce(totalReducer, 0);

interval(1000).pipe(
    take(3),
    reduce(totalReducer)
).subscribe({
    next: val => console.log(val),
    complete: ()  => console.log("complete")
})