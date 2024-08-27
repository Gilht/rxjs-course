import { from, fromEvent } from "rxjs";
import { debounceTime, map, mergeAll, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax"

const body = document.querySelector("body");
const textInput = document.createElement("input")
const orederList = document.createElement("ol")
body.append(textInput, orederList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup")

//SOLO ME TRAERIA LA ULTIMA EMISION DE MI OBSERVABLE EN CASO DE QUE SE LLAMA A UN API 
const url = "https://httpbin.org/delay/1?arg?="
input$.pipe(
    switchMap((texto) => ajax.getJSON(url + texto))
)
.subscribe( resp => {
    console.log(resp);
})