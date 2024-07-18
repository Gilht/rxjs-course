import { Observable, Observer } from "rxjs"
 

console.log('Hola Mundo!');

const observer: Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.info("completado")
};

const intervalo$ = new Observable<number>( subscriber  => {
    let count = 0;

    const interval = setInterval(() => {
        count ++;
        subscriber.next(count);
    }, 1000)

    return () => {
        clearInterval(interval)
        console.log("finishProcess")
    }
})  

const mySubscription = intervalo$.subscribe(num => console.log("count:", num));

setTimeout(() => {
    mySubscription.unsubscribe();
    console.log("finish Subscription")
}, 3000);


