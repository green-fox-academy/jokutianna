'use strict';
fetch('http://localhost:3000/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  //nincs body mert GET
.then(response => { //response object megszerzése
    if (response.status !== 200) {
      throw new Error('No answer from server');
    }
    return response; //továbbadom a response-t
  })
.then(response => response.json()) //jsonösítés
.catch((err) => { //elkapás
    console.log('This is az ERROR.')
  })
.then(result => {
    //console.log(result)
    
    for(let i=0; i < result.length; i++) { //mert ez egy array amit kaptam
      let post = JSON.stringify(result[i]);
      console.log(post);
      
      //function: adding posts as li-s
      let postList = document.querySelector('ul'); 
      console.log(postList);
      let currentPost = document.createElement('li');
      currentPost.innerHTML = `<div> title: ${ result[i].title }, url: ${ result[i].url }, score: ${ result[i].score } </div>`;
      postList.appendChild(currentPost);

      console.log(currentPost);
      
      //delete button //Itt még van egy fetch-es button-ös megoldás is
      let deleteButton = document.createElement('a'); 
      deleteButton.innerText = 'DELETE';
      currentPost.appendChild(deleteButton);
      deleteButton.setAttribute('href', `http://localhost:3000/delete/${result[i].id}`);
   
  }
})



//Submit button navigating to /submit
const postButton = document.querySelector('.submit');
postButton.addEventListener('click', (event) => {
  window.location.assign('http://localhost:3000/submit'); 
});





//XHR VERSION:
/*window.onload = () => {
  let xhr = new XMLHttpRequest(); //használja az adatbázist
  xhr.open('GET', 'http://localhost:3000/posts'); //server.js kap egy lekérést erre az endpoint-ra + megnyitja  a csatornát
  xhr.send(); //adatküldés kliensről a szerverre

  xhr.onload = handleReadyStateChange;
  
    function handleReadyStateChange () {
      let resultObject = JSON.parse(xhr.response);
      resultObject.forEach(post => {
        addPost(post); //később kifejtve
      });
    }
}

//kell egy function ami beleteszi nekem az elemeket:
const postList = document.querySelector('ul');
const addPost = (post) => {
  const row = document.createElement ('li');
  row.innerHTML = `id: ${post.id}, title: ${ post.title }, url: ${ post.url }, score: ${post.score}`;
  postList.appendChild(row);
  console.log(row);
}
*/