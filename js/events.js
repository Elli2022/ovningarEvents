// Click
// 1. Console log

// a.) Lägg till en eventlistener på h1-element som lyssnar efter klick. När ett klick registreras ska “H1” loggas i konsolen. 

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', function(){
//     h1.innerText = 'H1';
//     console.log('h1');
// })

// function h1Event(){
//     console.log('h1');
// }

// b.) Lägg till en eventlistener på p-element som lyssnar efter klick. När ett klick registreras ska “P” loggas i konsolen. 

const p = document.querySelector('p');
p.addEventListener('click', function () {
    p.innerText = 'P';
    console.log('p');
})

function pEvent() {
    console.log('p');
}

// c.) Lägg till en eventlistener på knapp-element som lyssnar efter klick. När ett klick registreras ska “KNAPP” loggas i konsolen. 

const button = document.querySelector('button');
button.addEventListener('click', function () {
    button.innerText = 'KNAPP!';
    console.log('KNAPP!');
})

function buttonEvent() {
    console.log('button');
}

//------------------------------------------------------------

// 2. Ändra h2
// a.) Modifiera response-funktionerna från första uppgiften så att texten för h2-elementet ändras.

const h2 = document.querySelector('h2');
h2.addEventListener('click', function () {
    h2.innerText = 'Nu är det annan text på h2-elementet';
    console.log('h2');
})

function h2Event() {
    console.log('h2');
}
// b.) Klickar man på h1-elementet ska texten h2-elementet vara “Du klickade på H1!”

const h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    h2.innerText = "Du klickade på H1!";
})

function h1Event() {
    console.log('h2');
}
// c.) Klickar man på p-elementet ska texten h2-elementet vara “Du klickade på P!”

p.addEventListener('click', function () {
    h2.innerText = " Du klickade på P!";
    // 3. Ändra bakgrundsfärg
    // a.) Lägg till ytterligare en sak till response-funktionerna från första uppgiften.
    p.style.backgroundColor = 'grey';
})

function pEvent() {
    console.log('h2')
}

// d.) Klickar man på knappen ska texten h2-elementet vara “Du klickade på knappen!”

button.addEventListener('click', function () {
    h2.innerText = "Du klickade på knappen!";
    // 3. Ändra bakgrundsfärg
    // a.) Lägg till ytterligare en sak till response-funktionerna från första uppgiften.
    h2.style.backgroundColor = 'skyblue';
})

function buttonEvent() {
    console.log('h2');
}

//-------------------------------------------------------------
// 3. Ändra bakgrundsfärg

// a.) Lägg till ytterligare en sak till response-funktionerna från första uppgiften.

//se i övningsuppgifterna ovan!

// b.) Klickar man på h1-elementet ska bodyns bakgrundsfärg bli ljusblå.

h1.addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})

// c.) Klickar man på p-elementet ska bodyns bakgrundsfärg bli rosa.

p.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})

// d.) Klickar man på knappen ska bodyns bakgrundsfärg bli orange.

button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
} )

//------------------------------------------------------------

// Mouseenter / Mouseleave
// 1. h1
// a.) Lägg till en eventlistener på h1-elementet som lyssnar efter ett mouseenter-event. När det eventet-sker ska textfärgen på h1-elementet ändras.

h1.addEventListener('mouseenter', function(){
    h1.style.color = 'yellow';
})
// b.) Lägg till en eventlistener på h1-elementet som lyssnar efter ett mouseleave-event. När det eventet-sker ska textfärgen på h1-elementet ändras.

h1.addEventListener('mouseleave', function(){
    h1.style.color = 'hotpink';
})

// 2. p

// a.) Lägg till en eventlistener på p-elementet som lyssnar efter ett mouseenter-event. När det eventet-sker ska textfärgen på knappen ändras.

p.addEventListener('mouseenter', function(){
    button.style.color = 'hotpink';
})
// b.) Lägg till en eventlistener på p-elementet som lyssnar efter ett mouseleave-event. När det eventet-sker ska textfärgen på knappen ändras.

p.addEventListener('mouseleave', function(){
    button.style.color = 'yellow';
})

// 3. button

// a.) Lägg till en eventlistener på knappen som lyssnar efter ett mouseenter-event. När det eventet-sker ska texten på h1-elementet ändras till “Knappen!”

button.addEventListener('mouseenter', function(){
    h1.innerText = "Knappen!";
})
// b.) Lägg till en eventlistener på knappen som lyssnar efter ett mouseleave-event. När det eventet-sker ska texten på h1-elementet ändras tillbaka till “H1-elementet”

button.addEventListener('mouseleave', function(){
    h1.innerText = "H1-elementet igen"
})

//--------------------------------------------

// Mousemove

// 1. Bodyn

// a.) Lägg till en eventlistner på body-elementet som lyssnar efter mousemove.

const body = document.querySelector('body');
body.addEventListener('mousemove', function(event){
    fontSize(event);
    backgroundColor(event);
});

function fontSize(event){
    
    // b.) Använd muspekarens y-position, alltså event.clientY för att ändra på h1-elementets font-storlek

    const fontSize = event.clientY;
    console.log(fontSize);
    h1.style.fontSize = fontSize+'px';
}


function backgroundColor(event){
    
    // c.) Använd muspekarens x-position, alltså event.clientX för att ändra på bakgrundsfärgen för p-elementet.

    const bc = event.clientX;
    console.log(bc);
    p.style.backgroundColor = `hsl(${bc}, 80%, 50%)`;
}

