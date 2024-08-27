import { from, fromEvent } from "rxjs";
import { debounceTime, map, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax"

const body = document.querySelector("body");
const textInput = document.createElement("input")
const orederList = document.createElement("ol")
body.append(textInput, orederList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup")


input$.pipe(
    debounceTime(500),
    map( event => {
        const texto = event.target["value"]
        console.log(texto);
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    }),
    mergeAll()
).subscribe( resp => {
    console.log(resp);
})