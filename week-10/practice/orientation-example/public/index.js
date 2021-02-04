'use strict';
let form = document.querySelector('.form');

let submit = document.querySelector('.button');
submit.addEventListener('submit', (event) => {
  fetch('/api/links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: form.url.value,
      alias: form.alias.value,
    })
  })
  .then((response) => {
    if (response.status !== 200){
      //function: error message add
      appendError();
    } else {
      //function: success message
      successMessage();
    }
    return response; //ez miért kell?
  })
  .then((response) => response.json())
  .catch((error) => console.log(error))

})

function appendError(){
  let messageLocation = document.querySelector('.message');

  let errorMessage = document.createElement('p');
  errorMessage.innerText = 'Your alias is already in use!';
  errorMessage.style.color = 'red';
  messageLocation.appendChild(errorMessage);
}

function successMessage(){
  let successMessage = document.createElement('p');
  successMessage.innerHTML = `Your URL is aliased to  <strong> ${response.alias} </strong> and your secret code is <strong> ${response.secretCode} </strong>.`;
  messageLocation.appendChild(successMessage);
      
}