'use strict';

const button = document.querySelector('.button');
const ENDPOINT = 'https://dog.ceo/api/breeds/image/random';
const generalContainer = document.querySelector('.app__container');
const list = document.querySelector ('.app__list');

const createPromise = () => {
    return (
        fetch(ENDPOINT)
            .then(response => response.json())
    );
}

const getDogs = () => {
    const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()]
    Promise.all(promises)
        .then(response => {
            console.log (response[0].message);
            for (let i = 0; i < response.length; i ++) {
                list.innerHTML += 
                `<li class="list__item">
                    <img src=${response[i].message} alt="dog image" class="img">
                    </li>`;
            };
        })
}

button.addEventListener('click', getDogs);