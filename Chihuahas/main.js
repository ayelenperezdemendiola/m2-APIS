'use strict';

const button = document.querySelector ('.btn--dogs');
const ENDPOINT = "https://dog.ceo/api/breed/chihuahua/images";
const dogsList = document.querySelector ('.dogs--list');

function getDogs (){
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(dogs => {
        const data = dogs.message;
        for(const dog of data){
            dogsList.innerHTML += `
            <div class="container--img">
                <img src=${dog} class="dog--img" alt="chihuahua picture"></img>
            </div>`
        }
        })
}

button.addEventListener('click', getDogs);