//-----------------------------------------
// Forms
// Lägg till element
// Skapa ett formulär med
// En textinput
// En knapp
// Lägg till en eventlistener till knappen.
// När man klickar på knappen ska ett h1 element skapas och läggas till till bodyn. 
// H1-elementets text ska sättas till det som användaren skrev in i inputen

const formButton = document.querySelector('#formButton');

formButton.addEventListener('click', changeText);

function changeText(event){
    event.preventDefault();
    
    const textInput = document.querySelector('#h1Text');
    const h1 = document.querySelector('h1');
    document.body.append('h1');
    h1.innerText = textInput.value;
   

};


