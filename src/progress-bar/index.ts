import { fromEvent } from "rxjs";
import { map } from "rxjs/operators"

const text = document.createElement("div");
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu purus, aliquam id rutrum sed, facilisis ut libero. Maecenas venenatis massa urna, nec iaculis neque porta eu. Phasellus id rutrum ex. Mauris tempor sapien elit, quis facilisis magna tristique non. Nullam eget ipsum bibendum, pellentesque nunc in, efficitur enim. Nullam scelerisque, enim sed tristique dictum, massa odio tincidunt turpis, tincidunt facilisis dolor turpis pretium urna. Maecenas non libero nec leo luctus euismod. Phasellus ullamcorper ligula metus. Nam et orci urna. Quisque non arcu suscipit, ornare ex sit amet, ullamcorper lorem. Phasellus quis leo luctus, aliquam nulla at, ullamcorper sem. Nunc eu nibh non odio viverra fer
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt lectus vel gravida cursus. Morbi a dolor vel enim interdum fermentum. Nullam tempor eu justo eget efficitur. Fusce mollis justo quis mi posuere egestas. Donec tempus posuere lorem, vitae luctus magna consectetur vitae. Quisque nec condimentum mi, sed condimentum purus. Pellentesque lorem nunc, congue nec sodales eu, consequat sit amet ligula. Proin ultricies mi eget sem feugiat tincidunt. Morbi ac est ipsum. Proin at arcu nec mauris laoreet lobortis lobortis vel ipsum. Duis sed massa sed leo tincidunt eleifend. Vivamus vel leo risus.
<br/><br/>
Maecenas lacinia tincidunt pretium. In quis risus pulvinar, hendrerit justo in, interdum dui. Quisque dolor tellus, tempus a lacus a, porta sagittis lorem. Aliquam accumsan, ipsum quis accumsan bibendum, ipsum enim maximus tortor, eu vulputate urna enim ac metus. Etiam cursus, mauris vel finibus blandit, diam tellus rutrum mi, in cursus ante ligula in diam. Quisque eu eros libero. Aenean elit massa, lobortis eget vehicula et, bibendum eget arcu. Phasellus pulvinar varius est, id scelerisque lorem rhoncus eu.
<br/><br/>
Sed egestas nec est tempus ultricies. Donec commodo eu metus nec ullamcorper. Donec rutrum mattis nunc sit amet bibendum. In aliquet est ut arcu consectetur blandit. Mauris interdum erat a ornare porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sollicitudin ligula. Ut rutrum pharetra consequat. Suspendisse ullamcorper mi vel urna maximus, id mollis odio sollicitudin. Maecenas viverra, sapien sit amet tincidunt mattis, nunc sem posuere metus, ac finibus augue dolor id diam. Quisque in est pulvinar, lacinia lorem sit amet, rutrum sem.
<br/><br/>
Praesent sagittis molestie lorem, sit amet maximus ex aliquet imperdiet. Quisque quis leo a augue molestie suscipit. Mauris posuere non odio at molestie. Suspendisse facilisis massa sit amet felis maximus, in consequat arcu dapibus. Integer ultricies facilisis euismod. In et erat sed purus accumsan pellentesque a at erat. Vivamus porta, leo id hendrerit finibus, metus dolor lacinia sapien, quis porta mauris mauris eget nibh. Cras sit amet enim eget est convallis malesuada at non lorem`;


const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, "scroll");

scroll$.subscribe(console.log)

const progress = scroll$.pipe(
    map(calcularPorcentajeScroll)
);

progress.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})