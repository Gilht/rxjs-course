import { fromEvent, tap } from "rxjs"
import { ajax } from "rxjs/ajax"
import { map, mergeMap } from "rxjs/operators"

const form = document.createElement("form")
const inputEmail = document.createElement("input")
const inputPass = document.createElement("input")
const submitButton = document.createElement("button")

const peticionHttpLogin = (userPass) => ajax.post("https://reqres.in/api/login?delay=1", userPass)

inputEmail.type = "email"
inputEmail.placeholder = "email"
inputEmail.value = "eve.holt@reqres.in"

inputPass.type = "password"
inputPass.placeholder = "password"
inputPass.value = "cityslicka"

submitButton.innerHTML = "ingresar"

form.append(inputEmail, inputPass, submitButton)
document.querySelector("body").append(form)

//STREAMS

const submitForm$ = fromEvent(form, "submit").pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    mergeMap(peticionHttpLogin)
);

submitForm$.subscribe( token => {
    console.log(token)
})