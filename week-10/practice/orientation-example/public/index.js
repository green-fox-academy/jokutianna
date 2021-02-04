'use strict';
let form = document.querySelector('.form');
let messageLocation = document.querySelector('.message'); //function-ök elérjék!

form.addEventListener('submit', (event) => { //mindig a formra!
  event.preventDefault();

  fetch('/api/links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: form.url.value,
      alias: form.alias.value,
    })
  })
  .then((response) => {
    console.log(response);
    if (response.status !== 200){
      appendError();
      throw Error('Alias is already in use.')
    } 
    return response; //továbbadja a response-t
  })
  .then((response) => response.json()) //akkor kell ha válasznak van szövege pl ha nem csak status code kell
  .then((responseBody) => {
    console.log(responseBody[0])
    successMessage(responseBody[0]) //response.json után mert: hivatkozok benne arra ami a res-ban van. nem baj hogy közben más a neve
    })
  .catch((error) => console.log(error))

})

function appendError(){
  let errorMessage = document.createElement('p');
  errorMessage.innerText = 'Your alias is already in use!';
  errorMessage.style.color = 'red';
  messageLocation.appendChild(errorMessage);
}

function successMessage(response){
  let successMessage = document.createElement('p');
  successMessage.innerHTML = `Your URL is aliased to  <strong> ${response.alias} </strong> and your secret code is <strong> ${response.secretCode} </strong>.`;
  messageLocation.appendChild(successMessage);
  form.reset();
      
}